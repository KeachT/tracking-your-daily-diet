import { parallel } from 'radash'

import { deleteDailyGoal, fetchAllDailyGoalIds } from '@/api/daily-goal'
import {
  deleteDailyMealRecord,
  fetchAllDailyMealRecordIds,
} from '@/api/daily-meal-record'
import { clearAllGuestData } from '@/api/guest/guest-storage'
import { getGuestModeFlag } from '@/api/guest/guestModeFlag'
import {
  deleteUserMealPreset,
  fetchAllUserMealPresetIds,
} from '@/api/user-meal-preset'

// Cap concurrent delete mutations so a large purge does not trip AppSync
// throttling. Failures are collected rather than aborting the batch, so a
// modest limit keeps pressure low without slowing small accounts noticeably.
const DELETE_CONCURRENCY = 10

/**
 * Deletes every piece of the signed-in user's data: all daily meal records,
 * daily goals and meal presets. The Cognito account itself is left intact.
 *
 * In guest mode there is no backend data, so this clears localStorage instead
 * and returns early. The two modes never mix.
 *
 * Idempotent by design.
 * Records are listed and then deleted, so a run that
 * fails partway can simply be retried: the next run re-lists only what remains.
 *
 * @returns Nothing. Throws an AggregateError if any record fails to delete.
 */
export async function purgeAllUserData(): Promise<void> {
  if (getGuestModeFlag()) {
    clearAllGuestData()
    return
  }

  // Reads are independent, so enumerate every model's ids in parallel.
  const [mealRecordIds, dailyGoalIds, userMealPresetIds] = await Promise.all([
    fetchAllDailyMealRecordIds(),
    fetchAllDailyGoalIds(),
    fetchAllUserMealPresetIds(),
  ])

  // Attempt all three groups regardless of individual failures, then surface
  // any errors together (Promise.allSettled never short-circuits).
  const results = await Promise.allSettled([
    parallel(DELETE_CONCURRENCY, mealRecordIds, (id) =>
      deleteDailyMealRecord({ input: { id } }),
    ),
    parallel(DELETE_CONCURRENCY, dailyGoalIds, (id) =>
      deleteDailyGoal({ input: { id } }),
    ),
    parallel(DELETE_CONCURRENCY, userMealPresetIds, (id) =>
      deleteUserMealPreset({ input: { id } }),
    ),
  ])

  // radash `parallel` rejects with an AggregateError bundling every failed
  // item; flatten those so the caller sees one flat list of underlying errors.
  const errors = results
    .filter(
      (result): result is PromiseRejectedResult => result.status === 'rejected',
    )
    .flatMap((result) =>
      result.reason instanceof AggregateError
        ? result.reason.errors
        : [result.reason],
    )

  if (errors.length > 0) {
    throw new AggregateError(
      errors,
      `Failed to delete ${errors.length} record(s) during purge`,
    )
  }
}

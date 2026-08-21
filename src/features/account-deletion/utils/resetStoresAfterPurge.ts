import {
  useDailyGoalStore,
  useNutritionNumbersStore,
  usePresetNutritionNumbersStore,
  useUserMealPresetStore,
  useWeeklyDailyMealRecordsStore,
} from '@/stores'

/**
 * Resets every store that holds the signed-in user's data back to its initial
 * state after a successful purge, so no stale numbers or records linger on
 * screen until the next fetch.
 */
export function resetStoresAfterPurge(): void {
  useDailyGoalStore.getState().reset()
  useWeeklyDailyMealRecordsStore.getState().reset()
  useUserMealPresetStore.getState().reset()
  useNutritionNumbersStore.getState().reset()
  usePresetNutritionNumbersStore.getState().reset()
}

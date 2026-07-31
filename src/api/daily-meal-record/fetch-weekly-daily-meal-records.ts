import { GraphQLQuery } from '@aws-amplify/api'

import {
  DailyMealRecord,
  ListDailyMealRecordsQuery,
  ListDailyMealRecordsQueryVariables,
} from '../../API'
import { listDailyMealRecords } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'
import { guestFetchWeeklyDailyMealRecords } from '../guest/guest-storage'
import { getGuestModeFlag } from '../guest/guestModeFlag'
import { fetchDailyMealRecordWithFoods } from './fetch-daily-meal-record'

/**
 * Fetches weekly daily meal records for a date range.
 *
 * @param currentDateString - The current date as a string (end of range).
 * @param prevWeekDateString - The previous week date as a string (start of range).
 * @returns An array of daily meal records for the week.
 */
export const fetchWeeklyDailyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string,
): Promise<DailyMealRecord[]> => {
  if (getGuestModeFlag())
    return guestFetchWeeklyDailyMealRecords(
      currentDateString,
      prevWeekDateString,
    )
  const filter = {
    date: { between: [prevWeekDateString, currentDateString] },
  }

  try {
    const validDailyMealRecordIds: string[] = []
    let nextToken: string | null | undefined = undefined

    do {
      const variables: ListDailyMealRecordsQueryVariables = {
        filter,
        nextToken,
      }

      const { data } = await client.graphql<
        GraphQLQuery<ListDailyMealRecordsQuery>
      >({
        query: listDailyMealRecords,
        variables,
        authMode: 'userPool',
      })

      const result = data?.listDailyMealRecords

      // Remove null entries and keep their IDs
      const pageIds = (result?.items ?? [])
        .filter((record) => record !== null)
        .map((record) => record!.id)

      validDailyMealRecordIds.push(...pageIds)
      nextToken = result?.nextToken
    } while (nextToken)

    const dailyMealRecordsWithFoods = await Promise.all(
      validDailyMealRecordIds.map((id) => fetchDailyMealRecordWithFoods(id)),
    )

    // Filter out null results
    return dailyMealRecordsWithFoods.filter(
      (record): record is DailyMealRecord => record !== null,
    )
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching weekly daily meal records:', error)
    }
    throw error
  }
}

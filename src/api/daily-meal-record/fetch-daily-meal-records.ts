import { GraphQLQuery } from '@aws-amplify/api'

import {
  DailyMealRecord,
  ListDailyMealRecordsQuery,
  ListDailyMealRecordsQueryVariables,
} from '../../API'
import { listDailyMealRecords } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'
import { fetchDailyMealRecordWithFoods } from './fetch-daily-meal-record'

/**
 * Fetches daily meal records based on the provided variables.
 *
 * @param variables - The variables for filtering daily meal records.
 * @returns An array of daily meal records with food details.
 */
export const fetchDailyMealRecords = async (
  variables?: ListDailyMealRecordsQueryVariables,
): Promise<DailyMealRecord[]> => {
  try {
    const { data } = await client.graphql<
      GraphQLQuery<ListDailyMealRecordsQuery>
    >({
      query: listDailyMealRecords,
      variables,
      authMode: 'userPool',
    })

    const dailyMealRecords = data?.listDailyMealRecords?.items || []

    // Filter out null records and map to their IDs
    const validDailyMealRecordIds = dailyMealRecords
      .filter((record) => record !== null)
      .map((record) => record!.id)

    // If no valid daily meal record IDs, return an empty array
    if (validDailyMealRecordIds.length === 0) {
      return []
    }

    // Fetch each daily meal record with its foods
    const dailyMealRecordsWithFoods = await Promise.all(
      validDailyMealRecordIds.map((id) => fetchDailyMealRecordWithFoods(id)),
    )

    // Filter out null results
    return dailyMealRecordsWithFoods.filter(
      (record): record is DailyMealRecord => record !== null,
    )
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching daily meal records:', error)
    }
    throw error
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  DailyMealRecord,
  ListDailyMealRecordsQuery,
  ListDailyMealRecordsQueryVariables,
} from '../../API'
import { listDailyMealRecords } from '../../graphql/queries'
import { fetchDailyMealRecordWithFoods } from './fetch-daily-meal-record'

/**
 * Fetches daily meal records based on the provided variables.
 *
 * @param variables - The variables for filtering daily meal records.
 * @returns An array of daily meal records with food details.
 */
export const fetchDailyMealRecords = async (
  variables?: ListDailyMealRecordsQueryVariables
): Promise<DailyMealRecord[]> => {
  try {
    const { data } = await API.graphql<GraphQLQuery<ListDailyMealRecordsQuery>>(
      {
        query: listDailyMealRecords,
        variables,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }
    )

    const dailyMealRecords = data?.listDailyMealRecords?.items || []

    // Remove null entries and fetch detailed records
    const validDailyMealRecordIds = dailyMealRecords
      .filter((record) => record !== null)
      .map((record) => record!.id)

    const dailyMealRecordsWithFoods = await Promise.all(
      validDailyMealRecordIds.map((id) => fetchDailyMealRecordWithFoods(id))
    )

    // Filter out null results
    return dailyMealRecordsWithFoods.filter(
      (record): record is DailyMealRecord => record !== null
    )
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching daily meal records:', error)
    }
    throw error
  }
}

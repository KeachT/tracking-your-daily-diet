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
 * Fetches weekly daily meal records for a date range.
 *
 * @param currentDateString - The current date as a string (end of range).
 * @param prevWeekDateString - The previous week date as a string (start of range).
 * @returns An array of daily meal records for the week.
 */
export const fetchWeeklyDailyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string
): Promise<DailyMealRecord[]> => {
  const variables: ListDailyMealRecordsQueryVariables = {
    filter: {
      date: { between: [prevWeekDateString, currentDateString] },
    },
  }

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
      console.error('Error fetching weekly daily meal records:', error)
    }
    throw error
  }
}

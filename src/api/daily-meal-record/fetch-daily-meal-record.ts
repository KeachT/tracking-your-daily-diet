import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  DailyMealRecord,
  GetDailyMealRecordQuery,
  GetDailyMealRecordQueryVariables,
} from '../../API'
import { getDailyMealRecord } from '../../graphql/queries'

/**
 * Fetches a daily meal record by its ID, including food details.
 *
 * @param dailyMealRecordId - The ID of the daily meal record to fetch.
 * @returns The daily meal record with food details or null if not found.
 */
export const fetchDailyMealRecordWithFoods = async (
  dailyMealRecordId: string
): Promise<DailyMealRecord | null> => {
  try {
    const variables: GetDailyMealRecordQueryVariables = {
      id: dailyMealRecordId,
    }

    const { data } = await API.graphql<GraphQLQuery<GetDailyMealRecordQuery>>({
      query: getDailyMealRecord,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    return data?.getDailyMealRecord as DailyMealRecord | null
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching daily meal record:', error)
    }
    throw error
  }
}

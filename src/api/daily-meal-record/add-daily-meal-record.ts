import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  CreateDailyMealRecordMutation,
  CreateDailyMealRecordMutationVariables,
  DailyMealRecord,
} from '../../API'
import { createDailyMealRecord } from '../../graphql/mutations'

/**
 * Creates a new daily meal record.
 *
 * @param variables - The variables for creating a daily meal record.
 * @returns The newly created daily meal record.
 */
export const addDailyMealRecord = async (
  variables: CreateDailyMealRecordMutationVariables
): Promise<DailyMealRecord> => {
  try {
    const { data } = await API.graphql<
      GraphQLQuery<CreateDailyMealRecordMutation>
    >({
      query: createDailyMealRecord,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const newDailyMealRecord = data?.createDailyMealRecord as DailyMealRecord
    if (!newDailyMealRecord) {
      throw new Error('Failed to create daily meal record')
    }

    return newDailyMealRecord
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating daily meal record:', error)
    }
    throw error
  }
}

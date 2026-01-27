import { GraphQLQuery } from '@aws-amplify/api'

import {
  CreateDailyMealRecordMutation,
  CreateDailyMealRecordMutationVariables,
  DailyMealRecord,
} from '../../API'
import { createDailyMealRecord } from '../../graphql/mutations'
import { client } from '../../utils/amplifyClient'

/**
 * Creates a new daily meal record.
 *
 * @param variables - The variables for creating a daily meal record.
 * @returns The newly created daily meal record.
 */
export const addDailyMealRecord = async (
  variables: CreateDailyMealRecordMutationVariables,
): Promise<DailyMealRecord> => {
  try {
    const { data } = await client.graphql<
      GraphQLQuery<CreateDailyMealRecordMutation>
    >({
      query: createDailyMealRecord,
      variables,
      authMode: 'userPool',
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

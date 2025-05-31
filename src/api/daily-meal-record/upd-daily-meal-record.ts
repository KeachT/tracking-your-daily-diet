import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  DailyMealRecord,
  UpdateDailyMealRecordMutation,
  UpdateDailyMealRecordMutationVariables,
} from '../../API'
import { updateDailyMealRecord } from '../../graphql/mutations'

/**
 * Updates an existing daily meal record.
 *
 * @param variables - The variables for updating a daily meal record.
 * @returns The updated daily meal record.
 */
export const updDailyMealRecord = async (
  variables: UpdateDailyMealRecordMutationVariables
): Promise<DailyMealRecord> => {
  try {
    const { data } = await API.graphql<
      GraphQLQuery<UpdateDailyMealRecordMutation>
    >({
      query: updateDailyMealRecord,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const updatedDailyMealRecord =
      data?.updateDailyMealRecord as DailyMealRecord
    if (!updatedDailyMealRecord) {
      throw new Error('Failed to update daily meal record')
    }

    return updatedDailyMealRecord
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error updating daily meal record:', error)
    }
    throw error
  }
}

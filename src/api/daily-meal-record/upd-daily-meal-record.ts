import { GraphQLQuery } from '@aws-amplify/api'

import {
  DailyMealRecord,
  UpdateDailyMealRecordMutation,
  UpdateDailyMealRecordMutationVariables,
} from '../../API'
import { updateDailyMealRecord } from '../../graphql/mutations'
import { client } from '../../utils/amplifyClient'

/**
 * Updates an existing daily meal record.
 *
 * @param variables - The variables for updating a daily meal record.
 * @returns The updated daily meal record.
 */
export const updDailyMealRecord = async (
  variables: UpdateDailyMealRecordMutationVariables,
): Promise<DailyMealRecord> => {
  try {
    const { data } = await client.graphql<
      GraphQLQuery<UpdateDailyMealRecordMutation>
    >({
      query: updateDailyMealRecord,
      variables,
      authMode: 'userPool',
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

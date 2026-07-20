import { GraphQLQuery } from '@aws-amplify/api'

import {
  DeleteDailyMealRecordMutation,
  DeleteDailyMealRecordMutationVariables,
} from '../../API'
import { deleteDailyMealRecord as deleteDailyMealRecordMutation } from '../../graphql/mutations'
import { client } from '../../utils/amplifyClient'

/**
 * Deletes a daily meal record.
 *
 * @param variables - The variables for deleting a daily meal record.
 * @returns Nothing. Throws if the deletion fails.
 */
export const deleteDailyMealRecord = async (
  variables: DeleteDailyMealRecordMutationVariables,
): Promise<void> => {
  try {
    await client.graphql<GraphQLQuery<DeleteDailyMealRecordMutation>>({
      query: deleteDailyMealRecordMutation,
      variables,
      authMode: 'userPool',
    })
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error deleting DailyMealRecord:', error)
    }
    throw error
  }
}

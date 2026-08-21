import { GraphQLQuery } from '@aws-amplify/api'

import {
  DeleteDailyGoalMutation,
  DeleteDailyGoalMutationVariables,
} from '../../API'
import { deleteDailyGoal as deleteDailyGoalMutation } from '../../graphql/mutations'
import { client } from '../../utils/amplifyClient'

export const deleteDailyGoal = async (
  variables: DeleteDailyGoalMutationVariables,
): Promise<void> => {
  try {
    await client.graphql<GraphQLQuery<DeleteDailyGoalMutation>>({
      query: deleteDailyGoalMutation,
      variables,
      authMode: 'userPool',
    })
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error deleting DailyGoal:', error)
    }
    throw error
  }
}

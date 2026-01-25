import { GraphQLQuery } from '@aws-amplify/api'

import {
  UpdateDailyGoalMutation,
  UpdateDailyGoalMutationVariables,
} from '../../API'
import { updateDailyGoal } from '../../graphql/mutations'
import { DailyGoalState } from '../../stores'
import { client } from '../amplifyClient'

export const updDailyGoal = async (
  variables: UpdateDailyGoalMutationVariables
) => {
  try {
    const { data } = await client.graphql<GraphQLQuery<UpdateDailyGoalMutation>>({
      query: updateDailyGoal,
      variables,
      authMode: 'userPool',
    })

    const dailyGoal = data?.updateDailyGoal as DailyGoalState['dailyGoal']
    if (!dailyGoal) {
      throw new Error('Failed to update daily goal')
    }

    return dailyGoal
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error updating DailyGoal:', error)
    }
    throw error
  }
}

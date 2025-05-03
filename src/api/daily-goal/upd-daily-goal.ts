import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  UpdateDailyGoalMutation,
  UpdateDailyGoalMutationVariables,
} from '../../API'
import { updateDailyGoal } from '../../graphql/mutations'
import { DailyGoalState } from '../../stores'

export const updDailyGoal = async (
  variables: UpdateDailyGoalMutationVariables
) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateDailyGoalMutation>>({
      query: updateDailyGoal,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
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

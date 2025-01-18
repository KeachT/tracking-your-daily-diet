import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  CreateDailyGoalMutation,
  CreateDailyGoalMutationVariables,
} from '../../API'
import { createDailyGoal } from '../../graphql/mutations'
import { DailyGoalState } from '../../stores'

export const addDailyGoal = async (
  variables: CreateDailyGoalMutationVariables
) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateDailyGoalMutation>>({
      query: createDailyGoal,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    const dailyGoal = data?.createDailyGoal as DailyGoalState['dailyGoal']
    return dailyGoal
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating DailyGoal:', err)
    }
  }
}

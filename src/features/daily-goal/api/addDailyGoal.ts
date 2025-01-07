import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  CreateDailyGoalInput,
  CreateDailyGoalMutation,
  CreateDailyGoalMutationVariables,
} from '../../../API'
import { createDailyGoal } from '../../../graphql/mutations'
import { DailyGoalState } from '../../../stores'

export const addDailyGoal = async (dailyGoal: DailyGoalState['dailyGoal']) => {
  const createDailyGoalInput: CreateDailyGoalInput = {
    calories: dailyGoal.calories,
    protein: dailyGoal.protein,
    carbohydrates: dailyGoal.carbohydrates,
    fat: dailyGoal.fat,
  }

  const variables: CreateDailyGoalMutationVariables = {
    input: createDailyGoalInput,
  }

  try {
    await API.graphql<GraphQLQuery<CreateDailyGoalMutation>>({
      query: createDailyGoal,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating DailyGoal:', err)
    }
  }
}

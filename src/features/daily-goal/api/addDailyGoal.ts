import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { CreateDailyGoalInput, CreateDailyGoalMutation } from '../../../API'
import { createDailyGoal } from '../../../graphql/mutations'
import { DailyGoalState } from '../../../stores/dailyGoal'
import { createDailyGoalInitialValues } from '../utils'

export const addDailyGoal = async (
  dailyGoal: DailyGoalState['dailyGoal'],
  setDailyGoal: DailyGoalState['setDailyGoal']
) => {
  const createDailyGoalInput: CreateDailyGoalInput = {
    calories: dailyGoal.calories,
    protein: dailyGoal.protein,
    carbohydrates: dailyGoal.carbohydrates,
    fat: dailyGoal.fat,
  }

  try {
    const { data } = await API.graphql<GraphQLQuery<CreateDailyGoalMutation>>({
      query: createDailyGoal,
      variables: { input: createDailyGoalInput },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    setDailyGoal(data?.createDailyGoal || createDailyGoalInitialValues())
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating DailyGoal:', err)
    }
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  UpdateDailyGoalInput,
  UpdateDailyGoalMutation,
  UpdateDailyGoalMutationVariables,
} from '../../../API'
import { updateDailyGoal } from '../../../graphql/mutations'
import { DailyGoalState } from '../../../stores'

export const updDailyGoal = async (
  dailyGoal: DailyGoalState['dailyGoal'],
  setDailyGoal: DailyGoalState['setDailyGoal']
) => {
  const updateDailyGoalInput: UpdateDailyGoalInput = {
    id: dailyGoal.id,
    calories: dailyGoal.calories,
    protein: dailyGoal.protein,
    carbohydrates: dailyGoal.carbohydrates,
    fat: dailyGoal.fat,
    _version: dailyGoal._version,
  }

  const variables: UpdateDailyGoalMutationVariables = {
    input: updateDailyGoalInput,
  }

  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateDailyGoalMutation>>({
      query: updateDailyGoal,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    const dailyGoal = data?.updateDailyGoal as DailyGoalState['dailyGoal']
    setDailyGoal(dailyGoal)
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error updating DailyGoal:', err)
    }
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { UpdateDailyGoalInput, UpdateDailyGoalMutation } from '../../../API'
import { updateDailyGoal } from '../../../graphql/mutations'
import { DailyGoalState } from '../../../stores/dailyGoal'
import { createDailyGoalInitialValues } from '../utils'

export async function updDailyGoal(
  dailyGoal: DailyGoalState['dailyGoal'],
  setDailyGoal: DailyGoalState['setDailyGoal']
) {
  const updateDailyGoalInput: UpdateDailyGoalInput = {
    id: dailyGoal.id,
    calories: dailyGoal.calories,
    protein: dailyGoal.protein,
    carbohydrates: dailyGoal.carbohydrates,
    fat: dailyGoal.fat,
    _version: dailyGoal._version,
  }

  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateDailyGoalMutation>>({
      query: updateDailyGoal,
      variables: { input: updateDailyGoalInput },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    setDailyGoal(data?.updateDailyGoal || createDailyGoalInitialValues())
  } catch (err) {
    console.log('Error updating DailyGoal:', err)
  }
}

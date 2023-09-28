import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { UpdateDailyGoalInput, UpdateDailyGoalMutation } from '../../../API'
import { updateDailyGoal } from '../../../graphql/mutations'
import { DailyGoalState } from '../../../stores/dailyGoal'

export async function updDailyGoal(
  updateDailyGoalInput: UpdateDailyGoalInput,
  setDailyGoalId: DailyGoalState['setDailyGoalId'],
  setCalories: DailyGoalState['setCalories'],
  setProtein: DailyGoalState['setProtein'],
  setFat: DailyGoalState['setFat'],
  setCarbohydrates: DailyGoalState['setCarbohydrates'],
  setVersion: DailyGoalState['setVersion']
) {
  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateDailyGoalMutation>>({
      query: updateDailyGoal,
      variables: { input: updateDailyGoalInput },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    setDailyGoalId(data?.updateDailyGoal?.id || '')
    setCalories(data?.updateDailyGoal?.calories || 0)
    setProtein(data?.updateDailyGoal?.protein || 0)
    setFat(data?.updateDailyGoal?.fat || 0)
    setCarbohydrates(data?.updateDailyGoal?.carbohydrates || 0)
    setVersion(data?.updateDailyGoal?._version || 0)
  } catch (err) {
    console.log('Error updating DailyGoal:', err)
  }
}

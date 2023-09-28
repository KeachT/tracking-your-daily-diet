import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { CreateDailyGoalInput, CreateDailyGoalMutation } from '../../../API'
import { createDailyGoal } from '../../../graphql/mutations'
import { DailyGoalState } from '../../../stores/dailyGoal'

export async function addDailyGoal(
  createDailyGoalInput: CreateDailyGoalInput,
  setDailyGoalId: DailyGoalState['setDailyGoalId'],
  setCalories: DailyGoalState['setCalories'],
  setProtein: DailyGoalState['setProtein'],
  setFat: DailyGoalState['setFat'],
  setCarbohydrates: DailyGoalState['setCarbohydrates'],
  setVersion: DailyGoalState['setVersion']
) {
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateDailyGoalMutation>>({
      query: createDailyGoal,
      variables: { input: createDailyGoalInput },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    setDailyGoalId(data?.createDailyGoal?.id || '')
    setCalories(data?.createDailyGoal?.calories || 0)
    setProtein(data?.createDailyGoal?.protein || 0)
    setFat(data?.createDailyGoal?.fat || 0)
    setCarbohydrates(data?.createDailyGoal?.carbohydrates || 0)
    setVersion(data?.createDailyGoal?._version || 0)
  } catch (err) {
    console.log('Error creating DailyGoal:', err)
  }
}

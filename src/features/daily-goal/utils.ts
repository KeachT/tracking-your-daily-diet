import { API } from 'aws-amplify'
import { listDailyGoals } from '../../graphql/queries'
import { createDailyGoal, updateDailyGoal } from '../../graphql/mutations'
import { GraphQLQuery } from '@aws-amplify/api'
import {
  ListDailyGoalsQuery,
  CreateDailyGoalInput,
  CreateDailyGoalMutation,
  UpdateDailyGoalInput,
  UpdateDailyGoalMutation,
} from '../../API'
import { DailyGoalState } from '../../stores/dailyGoal'

export async function fetchDailyGoals(
  setDailyGoalId: DailyGoalState['setDailyGoalId'],
  setCalories: DailyGoalState['setCalories'],
  setProtein: DailyGoalState['setProtein'],
  setFat: DailyGoalState['setFat'],
  setCarbohydrates: DailyGoalState['setCarbohydrates'],
  setVersion: DailyGoalState['setVersion']
) {
  console.log('called fetchDailyGoals')
  try {
    const { data } = await API.graphql<GraphQLQuery<ListDailyGoalsQuery>>({
      query: listDailyGoals,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    setDailyGoalId(data?.listDailyGoals?.items?.[0]?.id || '')
    setCalories(data?.listDailyGoals?.items?.[0]?.calories || 0)
    setProtein(data?.listDailyGoals?.items?.[0]?.protein || 0)
    setFat(data?.listDailyGoals?.items?.[0]?.fat || 0)
    setCarbohydrates(data?.listDailyGoals?.items?.[0]?.carbohydrates || 0)
    setVersion(data?.listDailyGoals?.items?.[0]?._version || 0)
  } catch (err) {
    console.log('error fetching DailyGoals')
  }
}

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

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { ListDailyGoalsQuery } from '../../../API'
import { listDailyGoals } from '../../../graphql/queries'
import { DailyGoalState } from '../../../stores/dailyGoal'

export async function fetchDailyGoals(
  setDailyGoalId: DailyGoalState['setDailyGoalId'],
  setCalories: DailyGoalState['setCalories'],
  setProtein: DailyGoalState['setProtein'],
  setFat: DailyGoalState['setFat'],
  setCarbohydrates: DailyGoalState['setCarbohydrates'],
  setVersion: DailyGoalState['setVersion']
) {
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

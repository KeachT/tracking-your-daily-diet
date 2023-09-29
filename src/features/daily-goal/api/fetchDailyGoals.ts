import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { ListDailyGoalsQuery } from '../../../API'
import { listDailyGoals } from '../../../graphql/queries'
import { DailyGoalState } from '../../../stores/dailyGoal'
import { createDailyGoalInitialValues } from '../utils'

export async function fetchDailyGoals(
  setDailyGoal: DailyGoalState['setDailyGoal']
) {
  try {
    const { data } = await API.graphql<GraphQLQuery<ListDailyGoalsQuery>>({
      query: listDailyGoals,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    setDailyGoal(
      data?.listDailyGoals?.items?.[0] || createDailyGoalInitialValues()
    )
  } catch (err) {
    console.log('error fetching DailyGoals')
  }
}

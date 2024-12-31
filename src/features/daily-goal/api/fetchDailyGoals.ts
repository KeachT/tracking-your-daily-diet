import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { ListDailyGoalsQuery } from '../../../API'
import { listDailyGoals } from '../../../graphql/queries'
import { DailyGoalState } from '../../../stores/dailyGoal'
import { createDailyGoalInitialValues } from '../utils'

export const fetchDailyGoals = async (
  setDailyGoal: DailyGoalState['setDailyGoal']
) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<ListDailyGoalsQuery>>({
      query: listDailyGoals,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const dailyGoal =
      data?.listDailyGoals?.items?.[0] || createDailyGoalInitialValues()

    setDailyGoal(dailyGoal)
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching DailyGoals')
    }
  }
}

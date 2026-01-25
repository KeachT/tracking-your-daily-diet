import { GraphQLQuery } from '@aws-amplify/api'

import { ListDailyGoalsQuery } from '../../API'
import { listDailyGoals } from '../../graphql/queries'
import { client } from '../amplifyClient'

export const fetchDailyGoal = async () => {
  try {
    const { data } = await client.graphql<GraphQLQuery<ListDailyGoalsQuery>>({
      query: listDailyGoals,
      authMode: 'userPool',
    })

    // Sort the daily goals by createdAt date and return the most recent one
    const dailyGoals = data?.listDailyGoals?.items || []
    const sortedDailyGoals = dailyGoals.sort((a, b) => {
      return (
        new Date(b?.createdAt || '').getTime() -
        new Date(a?.createdAt || '').getTime()
      )
    })

    return sortedDailyGoals[0]
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching DailyGoals:', error)
    }
    throw error
  }
}

import { GraphQLQuery } from '@aws-amplify/api'

import { ListDailyGoalsQuery, ListDailyGoalsQueryVariables } from '../../API'
import { listDailyGoals } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'

export const fetchAllDailyGoalIds = async (): Promise<string[]> => {
  const ids: string[] = []
  let nextToken: string | null | undefined = undefined

  try {
    do {
      const variables: ListDailyGoalsQueryVariables = { nextToken }

      const { data } = await client.graphql<GraphQLQuery<ListDailyGoalsQuery>>({
        query: listDailyGoals,
        variables,
        authMode: 'userPool',
      })

      const result = data?.listDailyGoals
      const pageIds = (result?.items ?? [])
        .filter((goal) => goal !== null)
        .map((goal) => goal!.id)

      ids.push(...pageIds)
      nextToken = result?.nextToken
    } while (nextToken)

    return ids
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching all DailyGoal ids:', error)
    }
    throw error
  }
}

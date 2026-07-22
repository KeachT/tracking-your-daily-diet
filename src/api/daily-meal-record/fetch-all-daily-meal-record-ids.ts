import { GraphQLQuery } from '@aws-amplify/api'

import {
  ListDailyMealRecordsQuery,
  ListDailyMealRecordsQueryVariables,
} from '../../API'
import { listDailyMealRecords } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'

/**
 * Fetches the IDs of every daily meal record owned by the signed-in user.
 *
 * @returns The IDs of all daily meal records across every page.
 */
export const fetchAllDailyMealRecordIds = async (): Promise<string[]> => {
  const ids: string[] = []
  let nextToken: string | null | undefined = undefined

  try {
    do {
      const variables: ListDailyMealRecordsQueryVariables = { nextToken }

      const { data } = await client.graphql<
        GraphQLQuery<ListDailyMealRecordsQuery>
      >({
        query: listDailyMealRecords,
        variables,
        authMode: 'userPool',
      })

      const result = data?.listDailyMealRecords
      const pageIds = (result?.items ?? [])
        .filter((record) => record !== null)
        .map((record) => record!.id)

      ids.push(...pageIds)
      nextToken = result?.nextToken
    } while (nextToken)

    return ids
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching all DailyMealRecord ids:', error)
    }
    throw error
  }
}

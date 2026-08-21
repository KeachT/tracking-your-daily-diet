import { GraphQLQuery } from '@aws-amplify/api'

import {
  ListUserMealPresetsQuery,
  ListUserMealPresetsQueryVariables,
} from '../../API'
import { listUserMealPresets } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'

/**
 * Fetches the IDs of every user meal preset owned by the signed-in user.
 *
 * @returns The IDs of all user meal presets across every page.
 */
export const fetchAllUserMealPresetIds = async (): Promise<string[]> => {
  const ids: string[] = []
  let nextToken: string | null | undefined = undefined

  try {
    do {
      const variables: ListUserMealPresetsQueryVariables = { nextToken }

      const { data } = await client.graphql<
        GraphQLQuery<ListUserMealPresetsQuery>
      >({
        query: listUserMealPresets,
        variables,
        authMode: 'userPool',
      })

      const result = data?.listUserMealPresets
      const pageIds = (result?.items ?? [])
        .filter((preset) => preset !== null)
        .map((preset) => preset!.id)

      ids.push(...pageIds)
      nextToken = result?.nextToken
    } while (nextToken)

    return ids
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching all UserMealPreset ids:', error)
    }
    throw error
  }
}

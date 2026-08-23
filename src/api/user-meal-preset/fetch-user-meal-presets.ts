import { GraphQLQuery } from '@aws-amplify/api'

import {
  ListUserMealPresetsQuery,
  ListUserMealPresetsQueryVariables,
  UserMealPreset,
} from '../../API'
import { listUserMealPresets } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'
import { guestFetchUserMealPresets } from '../guest/guest-storage'
import { getGuestModeFlag } from '../guest/guestModeFlag'
import { fetchUserMealPresetWithFood } from './fetch-user-meal-preset-with-food'

/**
 * Lists every preset the signed-in user owns, oldest first.
 *
 * The list query is a filtered Scan whose order is not guaranteed, so the
 * results are sorted by `createdAt` to keep the tab order stable across loads.
 *
 * @returns The ids of all presets, in the order they should be displayed.
 */
const fetchSortedUserMealPresetIds = async (): Promise<string[]> => {
  const presets: UserMealPreset[] = []
  let nextToken: string | null | undefined = undefined

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
    presets.push(
      ...(result?.items ?? []).filter(
        (preset): preset is UserMealPreset => preset !== null,
      ),
    )
    nextToken = result?.nextToken
  } while (nextToken)

  return presets
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    .map((preset) => preset.id)
}

/**
 * Fetches every user meal preset, including the food items of each one.
 *
 * The generated list query does not select nested `FoodItem` fields, so the
 * details are fetched per preset. A user keeps at most three presets, so the
 * extra round trips are bounded.
 *
 * @returns All presets owned by the user, oldest first.
 */
export const fetchUserMealPresets = async (): Promise<UserMealPreset[]> => {
  if (getGuestModeFlag()) return guestFetchUserMealPresets()

  try {
    const ids = await fetchSortedUserMealPresetIds()

    const presets = await Promise.all(ids.map(fetchUserMealPresetWithFood))

    return presets.filter((preset): preset is UserMealPreset => preset !== null)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching user meal presets:', error)
    }
    throw error
  }
}

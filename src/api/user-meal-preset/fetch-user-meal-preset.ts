import { GraphQLQuery } from '@aws-amplify/api'

import {
  ListUserMealPresetsQuery,
  ListUserMealPresetsQueryVariables,
  UserMealPreset,
} from '../../API'
import { listUserMealPresets } from '../../graphql/queries'
import { client } from '../amplifyClient'
import { fetchUserMealPresetWithFood } from './fetch-user-meal-preset-with-food'

/**
 * Fetches the user meal preset data.
 * Since each user should have only one preset, we fetch the first one from the list.
 *
 * @param variables - Optional query variables to filter the presets.
 * @returns The user's meal preset or null if not found.
 */
export const fetchUserMealPreset = async (
  variables?: ListUserMealPresetsQueryVariables
): Promise<UserMealPreset | null> => {
  try {
    const { data } = await client.graphql<GraphQLQuery<ListUserMealPresetsQuery>>({
      query: listUserMealPresets,
      variables,
      authMode: 'userPool',
    })

    const userMealPresets = data?.listUserMealPresets?.items || []
    const userMealPreset = userMealPresets[0] as UserMealPreset
    if (!userMealPreset) {
      console.info('No user meal preset found')
      return null
    }

    // Fetch the user meal preset with food details
    const userMealPresetWithFood = await fetchUserMealPresetWithFood(
      userMealPreset.id
    )

    if (!userMealPresetWithFood) {
      console.info('No user meal preset found')
      return null
    }

    return userMealPresetWithFood
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching user meal preset:', error)
    }
    throw error
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  ListUserMealPresetsQuery,
  ListUserMealPresetsQueryVariables,
  UserMealPreset,
} from '../../API'
import { listUserMealPresets } from '../../graphql/queries'
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
    const { data } = await API.graphql<GraphQLQuery<ListUserMealPresetsQuery>>({
      query: listUserMealPresets,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const userMealPresets = data?.listUserMealPresets?.items || []
    const userMealPreset = userMealPresets[0] as UserMealPreset
    if (!userMealPreset) {
      console.warn('No user meal preset found')
      return null
    }

    // Fetch the user meal preset with food details
    const userMealPresetWithFood = await fetchUserMealPresetWithFood(
      userMealPreset.id
    )
    if (!userMealPresetWithFood) {
      console.warn('No user meal preset found')
      return null
    }

    return userMealPresetWithFood
  } catch (error) {
    console.error('Error fetching user meal preset:', error)
    throw error
  }
}

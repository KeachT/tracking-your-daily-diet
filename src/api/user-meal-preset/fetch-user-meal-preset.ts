import { GraphQLQuery } from '@aws-amplify/api'

import {
  ListUserMealPresetsQuery,
  ListUserMealPresetsQueryVariables,
  UserMealPreset,
} from '../../API'
import { listUserMealPresets } from '../../graphql/queries'
import { client } from '../../utils/amplifyClient'
import { guestFetchUserMealPreset } from '../guest/guest-storage'
import { getGuestModeFlag } from '../guest/guestModeFlag'
import { fetchUserMealPresetWithFood } from './fetch-user-meal-preset-with-food'

/**
 * Finds the first user meal preset across every page of the list query.
 * The list query is a filtered Scan, so the preset can sit on a later page.
 *
 * @param variables - Optional query variables to filter the presets.
 * @returns The first preset found, or undefined when there is none.
 */
const findUserMealPreset = async (
  variables?: ListUserMealPresetsQueryVariables,
): Promise<UserMealPreset | undefined> => {
  let userMealPreset: UserMealPreset | undefined = undefined
  let nextToken: string | null | undefined = undefined

  do {
    const pageVariables: ListUserMealPresetsQueryVariables = {
      ...variables,
      nextToken,
    }

    const { data } = await client.graphql<
      GraphQLQuery<ListUserMealPresetsQuery>
    >({
      query: listUserMealPresets,
      variables: pageVariables,
      authMode: 'userPool',
    })

    const result = data?.listUserMealPresets
    userMealPreset = (result?.items ?? [])[0] as UserMealPreset | undefined
    nextToken = result?.nextToken
  } while (!userMealPreset && nextToken)

  return userMealPreset
}

/**
 * Fetches the user meal preset data.
 * Since each user should have only one preset, we fetch the first one from the list.
 *
 * @param variables - Optional query variables to filter the presets.
 * @returns The user's meal preset or null if not found.
 */
export const fetchUserMealPreset = async (
  variables?: ListUserMealPresetsQueryVariables,
): Promise<UserMealPreset | null> => {
  if (getGuestModeFlag()) return guestFetchUserMealPreset()

  try {
    const userMealPreset = await findUserMealPreset(variables)

    if (!userMealPreset) {
      console.info('No user meal preset found')
      return null
    }

    // Fetch the user meal preset with food details
    const userMealPresetWithFood = await fetchUserMealPresetWithFood(
      userMealPreset.id,
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

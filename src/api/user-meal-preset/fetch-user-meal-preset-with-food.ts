import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  GetUserMealPresetQuery,
  GetUserMealPresetQueryVariables,
  UserMealPreset,
} from '../../API'
import { getUserMealPreset } from '../../graphql/queries'

/**
 * Fetches a user meal preset by its ID, including food details.
 *
 * @param userMealPresetId - The ID of the user meal preset to fetch.
 * @returns The user meal preset with food details or null if not found.
 */
export const fetchUserMealPresetWithFood = async (userMealPresetId: string) => {
  const variables: GetUserMealPresetQueryVariables = {
    id: userMealPresetId,
  }

  try {
    const { data } = await API.graphql<GraphQLQuery<GetUserMealPresetQuery>>({
      query: getUserMealPreset,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    const userMealPresetWithFood =
      data?.getUserMealPreset as UserMealPreset | null
    return userMealPresetWithFood
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching user meal preset with food details:', err)
    }
  }
}

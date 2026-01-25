import { GraphQLQuery } from '@aws-amplify/api'

import {
  UpdateUserMealPresetMutation,
  UpdateUserMealPresetMutationVariables,
  UserMealPreset,
} from '../../API'
import { updateUserMealPreset } from '../../graphql/mutations'
import { client } from '../amplifyClient'

/**
 * Updates an existing user meal preset.
 *
 * @param variables - The variables for updating a user meal preset.
 * @returns The updated user meal preset.
 */
export const updUserMealPreset = async (
  variables: UpdateUserMealPresetMutationVariables
): Promise<UserMealPreset> => {
  try {
    const { data } = await client.graphql<
      GraphQLQuery<UpdateUserMealPresetMutation>
    >({
      query: updateUserMealPreset,
      variables,
      authMode: 'userPool',
    })

    const updatedUserMealPreset = data?.updateUserMealPreset as UserMealPreset
    if (!updatedUserMealPreset) {
      throw new Error('Failed to update user meal preset')
    }

    return updatedUserMealPreset
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error updating user meal preset:', error)
    }
    throw error
  }
}

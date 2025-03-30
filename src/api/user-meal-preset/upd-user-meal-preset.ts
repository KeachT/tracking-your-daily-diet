import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  UpdateUserMealPresetMutation,
  UpdateUserMealPresetMutationVariables,
  UserMealPreset,
} from '../../API'
import { updateUserMealPreset } from '../../graphql/mutations'

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
    const { data } = await API.graphql<
      GraphQLQuery<UpdateUserMealPresetMutation>
    >({
      query: updateUserMealPreset,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const updatedUserMealPreset = data?.updateUserMealPreset as UserMealPreset

    if (!updatedUserMealPreset) {
      throw new Error('Failed to update user meal preset')
    }

    return updatedUserMealPreset
  } catch (error) {
    console.error('Error updating user meal preset:', error)
    throw error
  }
}

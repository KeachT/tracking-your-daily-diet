import { GraphQLQuery } from '@aws-amplify/api'

import {
  DeleteUserMealPresetMutation,
  DeleteUserMealPresetMutationVariables,
} from '../../API'
import { deleteUserMealPreset as deleteUserMealPresetMutation } from '../../graphql/mutations'
import { client } from '../../utils/amplifyClient'

/**
 * Deletes a user meal preset.
 *
 * @param variables - The variables for deleting a user meal preset.
 * @returns Nothing. Throws if the deletion fails.
 */
export const deleteUserMealPreset = async (
  variables: DeleteUserMealPresetMutationVariables,
): Promise<void> => {
  try {
    await client.graphql<GraphQLQuery<DeleteUserMealPresetMutation>>({
      query: deleteUserMealPresetMutation,
      variables,
      authMode: 'userPool',
    })
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error deleting UserMealPreset:', error)
    }
    throw error
  }
}

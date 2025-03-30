import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  CreateUserMealPresetMutation,
  CreateUserMealPresetMutationVariables,
  UserMealPreset,
} from '../../API'
import { createUserMealPreset } from '../../graphql/mutations'

/**
 * Creates a new user meal preset.
 *
 * @param variables - The variables for creating a user meal preset.
 * @returns The newly created user meal preset.
 */
export const addUserMealPreset = async (
  variables: CreateUserMealPresetMutationVariables
): Promise<UserMealPreset> => {
  try {
    const { data } = await API.graphql<
      GraphQLQuery<CreateUserMealPresetMutation>
    >({
      query: createUserMealPreset,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const newUserMealPreset = data?.createUserMealPreset as UserMealPreset

    if (!newUserMealPreset) {
      console.warn('Failed to create user meal preset')
    }

    return newUserMealPreset
  } catch (error) {
    console.error('Error creating user meal preset:', error)
    throw error
  }
}

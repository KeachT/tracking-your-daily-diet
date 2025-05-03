import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  CreateMealRecordMutation,
  CreateMealRecordMutationVariables,
  MealRecord,
} from '../../API'
import { createMealRecord } from '../../graphql/mutations'

export const addMealRecord = async (
  variables: CreateMealRecordMutationVariables
) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateMealRecordMutation>>({
      query: createMealRecord,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const newMealRecord = data?.createMealRecord as MealRecord
    if (!newMealRecord) {
      throw new Error('Failed to create meal record')
    }

    return newMealRecord
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating meal record:', error)
    }
    throw error
  }
}

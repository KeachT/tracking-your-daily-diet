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
    return newMealRecord
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating meal record:', err)
    }
  }
}

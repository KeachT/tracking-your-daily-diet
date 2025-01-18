import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  FoodItemInput,
  MealRecord,
  UpdateMealRecordInput,
  UpdateMealRecordMutation,
  UpdateMealRecordMutationVariables,
} from '../../API'
import { updateMealRecord } from '../../graphql/mutations'

export const updMealRecord = async (
  variables: UpdateMealRecordMutationVariables
) => {
  try {
    await API.graphql<GraphQLQuery<UpdateMealRecordMutation>>({
      query: updateMealRecord,
      variables: variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error updating meal record:', err)
    }
  }
}

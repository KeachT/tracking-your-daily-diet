import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  MealRecord,
  UpdateMealRecordMutation,
  UpdateMealRecordMutationVariables,
} from '../../API'
import { updateMealRecord } from '../../graphql/mutations'

export const updMealRecord = async (
  variables: UpdateMealRecordMutationVariables
) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateMealRecordMutation>>({
      query: updateMealRecord,
      variables: variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    const updatedMealRecord = data?.updateMealRecord as MealRecord
    return updatedMealRecord
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error updating meal record:', err)
    }
  }
}

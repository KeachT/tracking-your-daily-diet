import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  FoodItemInput,
  MealRecord,
  UpdateMealRecordInput,
  UpdateMealRecordMutation,
  UpdateMealRecordMutationVariables,
} from '../../../API'
import { updateMealRecord } from '../../../graphql/mutations'
import { FormsType } from '../types'

export const updMealRecord = async (
  forms: FormsType,
  mealCategoryName: string,
  mealRecord: MealRecord
) => {
  const foods = forms.values[mealCategoryName]

  const normalizedFoods: FoodItemInput[] = foods.map((food) => {
    const { id, name, calories, protein, carbohydrates, fat } = food
    return {
      id,
      name,
      calories: Number(calories || 0),
      protein: Number(protein || 0),
      carbohydrates: Number(carbohydrates || 0),
      fat: Number(fat || 0),
    }
  })

  const updateMealRecordInput: UpdateMealRecordInput = {
    id: mealRecord.id,
    date: mealRecord.date,
    category: mealRecord.category,
    foods: normalizedFoods,
    _version: mealRecord._version,
  }

  const variables: UpdateMealRecordMutationVariables = {
    input: updateMealRecordInput,
  }

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

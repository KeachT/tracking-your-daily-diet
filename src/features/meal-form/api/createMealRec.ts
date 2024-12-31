import { GraphQLQuery } from '@aws-amplify/api'
import { randomId } from '@mantine/hooks'
import { API } from 'aws-amplify'

import {
  CreateMealRecordMutation,
  CreateMealRecordMutationVariables,
  MealCategoryName,
} from '../../../API'
import { createMealRecord } from '../../../graphql/mutations'
import { FormsType } from '../types'

export const createMealRec = async (
  forms: FormsType,
  mealCategoryName: string,
  currentDateString: string
) => {
  const foods = forms.values[mealCategoryName]

  const normalizedFoods = foods.map((food) => {
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

  const variables: CreateMealRecordMutationVariables = {
    input: {
      id: randomId(),
      date: currentDateString,
      category: mealCategoryName as MealCategoryName,
      foods: normalizedFoods,
    },
  }

  try {
    await API.graphql<GraphQLQuery<CreateMealRecordMutation>>({
      query: createMealRecord,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating meal record:', err)
    }
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  CreateMealCategoryInput,
  CreateMealCategoryMutation,
  MealCategoryName,
} from '../../../API'
import { createMealCategory } from '../../../graphql/mutations'

export const createMealCategories = async (mealDateId: string) => {
  try {
    const mealCategoryNames: MealCategoryName[] =
      Object.values(MealCategoryName)

    await Promise.all(
      mealCategoryNames.map(async (name) => {
        const createMealCategoryInput: CreateMealCategoryInput = {
          name,
          mealdateID: mealDateId,
        }

        await API.graphql<GraphQLQuery<CreateMealCategoryMutation>>({
          query: createMealCategory,
          variables: { input: createMealCategoryInput },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating MealCategory:', err)
    }
  }
}

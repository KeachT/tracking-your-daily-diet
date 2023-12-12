import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { CreateFoodMutation } from '../../../API'
import { createFood } from '../../../graphql/mutations'

export const createFoods = async (
  createTargetFoods: any,
  mealcategoryID: string
) => {
  try {
    await Promise.all(
      createTargetFoods.map(async (createTargetFood: any) => {
        const variables = {
          input: {
            mealcategoryID,
            name: createTargetFood.name || '',
            calories: createTargetFood.calories || 0,
            protein: createTargetFood.protein || 0,
            carbohydrates: createTargetFood.carbohydrates || 0,
            fat: createTargetFood.fat || 0,
          },
        }

        await API.graphql<GraphQLQuery<CreateFoodMutation>>({
          query: createFood,
          variables,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    console.log('Error creating food:', err)
  }
}

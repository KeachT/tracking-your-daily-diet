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
        const { id, ...rest } = createTargetFood
        const variables = { input: { ...rest, mealcategoryID } }

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

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { DeleteFoodInput, DeleteFoodMutation } from '../../../API'
import { deleteFood } from '../../../graphql/mutations'

export const deleteFoods = async (deleteTargetFoods: any) => {
  try {
    await Promise.all(
      deleteTargetFoods.map(async (deleteTargetFood: any) => {
        const { id, _version } = deleteTargetFood
        const deleteFoodInput: DeleteFoodInput = { id, _version }

        await API.graphql<GraphQLQuery<DeleteFoodMutation>>({
          query: deleteFood,
          variables: { input: deleteFoodInput },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error deleting food:', err)
    }
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { UpdateFoodMutation } from '../../../API'
import { updateFood } from '../../../graphql/mutations'

export const updateFoods = async (updateTargetFoods: any) => {
  try {
    await Promise.all(
      updateTargetFoods.map(async (updateTargetFood: any) => {
        // Exclude not necessary property
        const {
          __typename,
          createdAt,
          updatedAt,
          _deleted,
          _lastChangedAt,
          owner,
          ...updateFoodInput
        } = updateTargetFood

        await API.graphql<GraphQLQuery<UpdateFoodMutation>>({
          query: updateFood,
          variables: { input: updateFoodInput },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    console.log('Error updating food:', err)
  }
}

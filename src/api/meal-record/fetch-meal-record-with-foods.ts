import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { GetMealRecordQuery, GetMealRecordQueryVariables } from '../../API'
import { getMealRecord } from '../../graphql/queries'

export const fetchMealRecordWithFoods = async (mealRecordId: string) => {
  const variables: GetMealRecordQueryVariables = {
    id: mealRecordId,
  }

  try {
    const { data } = await API.graphql<GraphQLQuery<GetMealRecordQuery>>({
      query: getMealRecord,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealRecord = data?.getMealRecord
    const foods = mealRecord?.foods || []

    // Remove duplicate foods
    const uniqueFoodsMap = new Map(foods.map((food) => [food?.id, food]))
    const uniqueFoods = [...uniqueFoodsMap.values()]

    const mealRecordWithUniqueFoods = {
      ...mealRecord,
      foods: uniqueFoods,
    }
    return mealRecordWithUniqueFoods
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching MealRecord:', error)
    }
    throw error
  }
}

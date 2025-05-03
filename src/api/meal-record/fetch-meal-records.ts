import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  ListMealRecordsQuery,
  ListMealRecordsQueryVariables,
  MealRecord,
} from '../../API'
import { listMealRecords } from '../../graphql/queries'
import { fetchMealRecordWithFoods } from './fetch-meal-record-with-foods'

export const fetchMealRecords = async (
  variables: ListMealRecordsQueryVariables
) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<ListMealRecordsQuery>>({
      query: listMealRecords,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealRecords = data?.listMealRecords?.items || []

    // Remove duplicate meal records
    const uniqueMealRecordsMap = new Map(
      mealRecords.map((mealRecord) => [mealRecord?.category, mealRecord])
    )
    const uniqueMealRecords = [...uniqueMealRecordsMap.values()]
    const uniqueMealRecordIds = uniqueMealRecords.map(
      (uniqueMealRecord) => uniqueMealRecord?.id
    )

    const uniqueMealRecordsWithFoods = await Promise.all(
      uniqueMealRecordIds.map((mealRecordId) =>
        fetchMealRecordWithFoods(mealRecordId as string)
      )
    )

    return uniqueMealRecordsWithFoods as MealRecord[]
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching meal records:', error)
    }
    throw error
  }
}

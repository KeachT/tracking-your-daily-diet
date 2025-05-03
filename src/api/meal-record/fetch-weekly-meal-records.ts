import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  ListMealRecordsQuery,
  ListMealRecordsQueryVariables,
  MealRecord,
} from '../../API'
import { listMealRecords } from '../../graphql/queries'
import { fetchMealRecordWithFoods } from './fetch-meal-record-with-foods'

export const fetchWeeklyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string
) => {
  const variables: ListMealRecordsQueryVariables = {
    filter: {
      date: { between: [prevWeekDateString, currentDateString] },
    },
  }

  try {
    let { data } = await API.graphql<GraphQLQuery<ListMealRecordsQuery>>({
      query: listMealRecords,
      variables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealRecords = data?.listMealRecords?.items || []

    // Remove duplicate meal records with the same date and category
    const uniqueMealRecordsMap = new Map(
      mealRecords.map((mealRecord) => {
        const dateCategoryKey = mealRecord?.date + '-' + mealRecord?.category
        return [dateCategoryKey, mealRecord]
      })
    )
    const uniqueMealRecords = [...uniqueMealRecordsMap.values()]
    const uniqueMealRecordIds = uniqueMealRecords.map(
      (uniqueMealRecord) => uniqueMealRecord?.id
    )

    const mealRecordsWithFoods = await Promise.all(
      uniqueMealRecordIds.map((mealRecordId) =>
        fetchMealRecordWithFoods(mealRecordId as string)
      )
    )

    return mealRecordsWithFoods as MealRecord[]
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching weekly meal records:', error)
    }
    throw error
  }
}

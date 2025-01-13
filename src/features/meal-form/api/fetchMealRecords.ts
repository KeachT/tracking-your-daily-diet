import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  ListMealRecordsQuery,
  ListMealRecordsQueryVariables,
} from '../../../API'
import { listMealRecords } from '../../../graphql/queries'
import { MealRecordsState } from '../stores'
import { fetchMealRecordWithFoods } from './fetchMealRecordWithFoods'

export const fetchMealRecords = async (
  currentDateString: string,
  setMealRecords: MealRecordsState['setMealRecords']
) => {
  const variables: ListMealRecordsQueryVariables = {
    filter: {
      date: { eq: currentDateString },
    },
  }

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

    setMealRecords(
      uniqueMealRecordsWithFoods as MealRecordsState['mealRecords']
    )
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching MealDates:', err)
    }
  }
}

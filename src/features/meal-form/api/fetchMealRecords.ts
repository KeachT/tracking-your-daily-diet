import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  GetMealRecordQuery,
  GetMealRecordQueryVariables,
  ListMealRecordsQuery,
  ListMealRecordsQueryVariables,
} from '../../../API'
import { getMealRecord, listMealRecords } from '../../../graphql/queries'
import { MealRecordsState } from '../../../stores/mealRecords'

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
    const mealRecordIds = mealRecords.map((mealRecord) => mealRecord?.id)

    const mealRecordsWithFoods = await Promise.all(
      mealRecordIds.map(async (mealRecordId) => {
        const variables: GetMealRecordQueryVariables = {
          id: mealRecordId || '',
        }
        const { data } = await API.graphql<GraphQLQuery<GetMealRecordQuery>>({
          query: getMealRecord,
          variables,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
        return data?.getMealRecord
      })
    )

    setMealRecords(mealRecordsWithFoods as MealRecordsState['mealRecords'])
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching MealDates:', err)
    }
  }
}

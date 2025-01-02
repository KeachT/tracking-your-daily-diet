import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import {
  GetMealRecordQuery,
  GetMealRecordQueryVariables,
  ListMealRecordsQuery,
  ListMealRecordsQueryVariables,
  MealRecord,
} from '../../../API'
import { getMealRecord, listMealRecords } from '../../../graphql/queries'
import { WeeklyMealRecordsState } from '../../../stores/weeklyMealRecords'

export const fetchWeeklyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string,
  setWeeklyMealRecords: WeeklyMealRecordsState['setWeeklyMealRecords']
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

    setWeeklyMealRecords(mealRecordsWithFoods as MealRecord[])
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching MealDates:', err)
    }
  }
}

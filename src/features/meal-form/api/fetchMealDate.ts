import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { GetMealDateQuery } from '../../../API'
import { getMealDate, listMealDates } from '../../../graphql/queries'
import { MealCategoriesState } from '../../../stores/mealCategories'
import { MealDateState } from '../../../stores/mealDate'

export async function fetchMealDate(
  mealDateId: string | undefined,
  setMealDate: MealDateState['setMealDate'],
  setMealCategories: MealCategoriesState['setMealCategories']
) {
  try {
    const { data } = await API.graphql<GraphQLQuery<GetMealDateQuery>>({
      query: getMealDate,
      variables: { id: mealDateId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.getMealDate
    if (mealDate) {
      setMealDate(mealDate)
      setMealCategories(mealDate.mealCategories?.items)
    }
  } catch (err) {
    console.log('Error fetching MealDate:', err)
  }
}
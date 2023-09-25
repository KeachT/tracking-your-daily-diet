import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { ListMealDatesQuery, ListMealDatesQueryVariables } from '../../../API'
import { listMealDates } from '../../../graphql/queries'
import { MealCategoriesState } from '../../../stores/mealCategories'
import { MealDateState } from '../../../stores/mealDate'
import { addMealDate } from './addMealDate'
import { createMealCategories } from './createMealCategories'
import { fetchMealDate } from './fetchMealDate'

export async function fetchMealDates(
  currentDateString: string,
  setMealDate: MealDateState['setMealDate'],
  setMealCategories: MealCategoriesState['setMealCategories']
) {
  const listMealDatesQueryVariables: ListMealDatesQueryVariables = {
    filter: {
      date: { eq: currentDateString },
    },
  }

  try {
    let { data } = await API.graphql<GraphQLQuery<ListMealDatesQuery>>({
      query: listMealDates,
      variables: listMealDatesQueryVariables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.listMealDates?.items[0]
    setMealDate(mealDate)

    if (!mealDate) {
      await addMealDate(currentDateString, setMealDate, setMealCategories)
      return
    }

    const mealDateId = mealDate.id
    const mealCategoriesExists =
      (mealDate.mealCategories?.items?.length || 0) > 0

    if (mealCategoriesExists) {
      setMealCategories(mealDate?.mealCategories?.items)
    } else {
      await createMealCategories(mealDateId)
      await fetchMealDate(mealDateId, setMealDate, setMealCategories)
    }
  } catch (err) {
    console.log('Error fetching MealDates:', err)
  }
}

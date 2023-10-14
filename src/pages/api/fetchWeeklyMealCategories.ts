import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { ListMealDatesQuery, ListMealDatesQueryVariables } from '../../API'
import { listMealDates } from '../../graphql/queries'
import { WeeklyMealCategoriesState } from '../../stores/weeklyMealCategories'

export async function fetchWeeklyMealCategories(
  currentDateString: string,
  prevWeekDateString: string,
  setWeeklyMealCategories: WeeklyMealCategoriesState['setWeeklyMealCategories']
) {
  const listMealDatesQueryVariables: ListMealDatesQueryVariables = {
    filter: {
      date: { between: [prevWeekDateString, currentDateString] },
    },
  }

  try {
    let { data } = await API.graphql<GraphQLQuery<ListMealDatesQuery>>({
      query: listMealDates,
      variables: listMealDatesQueryVariables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const weeklyMealDates = data?.listMealDates?.items

    const weeklyMealCategories = weeklyMealDates?.flatMap(
      (mealDate) => mealDate?.mealCategories?.items
    )

    setWeeklyMealCategories(weeklyMealCategories)
  } catch (err) {
    console.log('Error fetching MealDates:', err)
  }
}

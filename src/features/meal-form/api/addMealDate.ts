import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { CreateMealDateInput, CreateMealDateMutation } from '../../../API'
import { createMealDate } from '../../../graphql/mutations'
import { MealCategoriesState } from '../../../stores/mealCategories'
import { MealDateState } from '../../../stores/mealDate'
import { createMealCategories } from './createMealCategories'
import { fetchMealDate } from './fetchMealDate'

export async function addMealDate(
  currentDateString: string,
  setMealDate: MealDateState['setMealDate'],
  setMealCategories: MealCategoriesState['setMealCategories']
) {
  try {
    const createMealDateInput: CreateMealDateInput = {
      date: currentDateString,
    }

    const { data } = await API.graphql<GraphQLQuery<CreateMealDateMutation>>({
      query: createMealDate,
      variables: { input: createMealDateInput },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.createMealDate
    const mealDateId = mealDate?.id || ''

    await createMealCategories(mealDateId)
    await fetchMealDate(mealDateId, setMealDate, setMealCategories)
  } catch (err) {
    console.log('Error creating MealDate:', err)
  }
}

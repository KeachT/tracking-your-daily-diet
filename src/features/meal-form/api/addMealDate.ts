import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'

import { CreateMealDateInput, CreateMealDateMutation } from '../../../API'
import { createMealDate } from '../../../graphql/mutations'
import { MealCategoriesState } from '../../../stores/mealCategories'
import { MealDateState } from '../../../stores/mealDate'
import { createMealCategories } from './createMealCategories'
import { fetchMealDate } from './fetchMealDate'

export const addMealDate = async (
  currentDateString: string,
  setMealDate: MealDateState['setMealDate'],
  setMealCategories: MealCategoriesState['setMealCategories']
) => {
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
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating MealDate:', err)
    }
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { randomId } from '@mantine/hooks'
import { API } from 'aws-amplify'
import { sum } from 'radash'

import {
  CreateMealDateInput,
  CreateMealDateMutation,
  ListMealDatesQuery,
  ListMealDatesQueryVariables,
} from '../../API'
import { createMealDate } from '../../graphql/mutations'
import { listMealDates } from '../../graphql/queries'
import { MealDateState } from '../../stores/mealDate'
import { FormField, FormsType } from './types'

/**
 * Creates initial values for a food form.
 *
 * @returns The initial values object with empty name and zero values for calories, protein, carbohydrates, fat, and a randomly generated key.
 */
export const createFoodInitialValues = (): FormField => {
  return {
    name: '',
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    key: randomId(),
  }
}

/**
 * Creates an array of objects containing the sum of values for each property in the forms.
 *
 * @param forms - The forms object containing the values to be summed.
 * @returns The array of objects with the sum of values for calories, protein, fat, and carbohydrates.
 */
export const createSumValuesAry = (forms: FormsType) => {
  const sumValuesAry = Object.values(forms.values).map((formValue) => {
    const sumCalories = sum(formValue, (f) => Number(f.calories))
    const sumProtein = sum(formValue, (f) => Number(f.protein))
    const sumFat = sum(formValue, (f) => Number(f.fat))
    const sumCarbohydrates = sum(formValue, (f) => Number(f.carbohydrates))

    return { sumCalories, sumProtein, sumFat, sumCarbohydrates }
  })

  return sumValuesAry
}

/**
 * Fetches meal dates from the server based on the current date.
 *
 * @async
 * @param currentDateString - The current date in string format.
 * @param setMealDate - The function to set the fetched meal date to store.
 * @return A promise that resolves when the meal dates are fetched and processed.
 */
export async function fetchMealDates(
  currentDateString: string,
  setMealDate: MealDateState['setMealDate']
) {
  const listMealDatesQueryVariables: ListMealDatesQueryVariables = {
    filter: {
      date: { eq: currentDateString },
    },
  }

  try {
    const { data } = await API.graphql<GraphQLQuery<ListMealDatesQuery>>({
      query: listMealDates,
      variables: listMealDatesQueryVariables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.listMealDates?.items[0]
    setMealDate(mealDate)

    !mealDate &&
      addMealDate(
        {
          date: currentDateString,
        },
        setMealDate
      )
  } catch (err) {
    console.log('error fetching DailyGoals')
  }
}

/**
 * Adds a new meal date to the server.
 *
 * @async
 * @param createMealDateInput - The input data for creating a new meal date.
 * @param setMealDate - The function to set the newly created meal date to store.
 * @return A promise that resolves when the meal date is successfully created and set.
 */
async function addMealDate(
  createMealDateInput: CreateMealDateInput,
  setMealDate: MealDateState['setMealDate']
) {
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateMealDateMutation>>({
      query: createMealDate,
      variables: { input: createMealDateInput },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.createMealDate
    setMealDate(mealDate)
  } catch (err) {
    console.log('Error creating DailyGoal:', err)
  }
}

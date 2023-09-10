import { GraphQLQuery } from '@aws-amplify/api'
import { randomId } from '@mantine/hooks'
import { API } from 'aws-amplify'
import { sum } from 'radash'

import {
  CreateMealCategoryInput,
  CreateMealCategoryMutation,
  CreateMealDateInput,
  CreateMealDateMutation,
  GetMealDateQuery,
  ListMealDatesQuery,
  ListMealDatesQueryVariables,
  MealCategoryName,
} from '../../API'
import { createMealCategory, createMealDate } from '../../graphql/mutations'
import { getMealDate, listMealDates } from '../../graphql/queries'
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
    let { data } = await API.graphql<GraphQLQuery<ListMealDatesQuery>>({
      query: listMealDates,
      variables: listMealDatesQueryVariables,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.listMealDates?.items[0]
    setMealDate(mealDate)

    const mealDateId = mealDate?.id || ''
    const mealCategoriesExists =
      (mealDate?.mealCategories?.items.length || 0) > 0

    if (mealDate && !mealCategoriesExists) {
      await createMealCategories(mealDateId)
      await fetchMealDate(mealDateId, setMealDate)
    }

    if (!mealDate) {
      await addMealDate(currentDateString, setMealDate)
    }
  } catch (err) {
    console.log('Error fetching MealDates')
  }
}

async function addMealDate(
  currentDateString: string,
  setMealDate: MealDateState['setMealDate']
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
    await fetchMealDate(mealDateId, setMealDate)
  } catch (err) {
    console.log('Error creating MealDate:', err)
  }
}

async function createMealCategories(mealDateId: string) {
  try {
    const mealCategoryNames: MealCategoryName[] =
      Object.values(MealCategoryName)

    for (const name of mealCategoryNames) {
      const createMealCategoryInput: CreateMealCategoryInput = {
        name: name,
        mealdateID: mealDateId, // in the schema, mealdateID
      }

      await API.graphql<GraphQLQuery<CreateMealCategoryMutation>>({
        query: createMealCategory,
        variables: { input: createMealCategoryInput },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
    }
  } catch (err) {
    console.log('Error creating MealCategory:', err)
  }
}

async function fetchMealDate(
  mealDateId: string,
  setMealDate: MealDateState['setMealDate']
) {
  try {
    const { data } = await API.graphql<GraphQLQuery<GetMealDateQuery>>({
      query: getMealDate,
      variables: { id: mealDateId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    const mealDate = data?.getMealDate
    setMealDate(mealDate)
  } catch (err) {
    console.log('Error fetching MealDate:', err)
  }
}

import { GraphQLQuery } from '@aws-amplify/api'
import { randomId } from '@mantine/hooks'
import { API } from 'aws-amplify'
import { sum } from 'radash'

import {
  CreateFoodMutation,
  CreateMealCategoryInput,
  CreateMealCategoryMutation,
  CreateMealDateInput,
  CreateMealDateMutation,
  DeleteFoodInput,
  DeleteFoodMutation,
  GetMealDateQuery,
  ListMealDatesQuery,
  ListMealDatesQueryVariables,
  MealCategoryName,
  UpdateFoodMutation,
} from '../../API'
import {
  createFood,
  createMealCategory,
  createMealDate,
  deleteFood,
  updateFood,
} from '../../graphql/mutations'
import { getMealDate, listMealDates } from '../../graphql/queries'
import { MealCategoriesState } from '../../stores/mealCategories'
import { MealDateState } from '../../stores/mealDate'
import { FormField, FormsType } from './types'

/**
 * Creates initial values for a food form.
 *
 * @returns The initial values object with empty name and zero values for calories, protein, carbohydrates, fat, and a randomly generated key.
 */
export const createFoodInitialValues = (): FormField => {
  return {
    id: randomId(),
    name: '',
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
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

async function addMealDate(
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

async function createMealCategories(mealDateId: string) {
  try {
    const mealCategoryNames: MealCategoryName[] =
      Object.values(MealCategoryName)

    await Promise.all(
      mealCategoryNames.map(async (name) => {
        const createMealCategoryInput: CreateMealCategoryInput = {
          name,
          mealdateID: mealDateId,
        }

        await API.graphql<GraphQLQuery<CreateMealCategoryMutation>>({
          query: createMealCategory,
          variables: { input: createMealCategoryInput },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    console.log('Error creating MealCategory:', err)
  }
}

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

export async function createFoods(
  createTargetFoods: any,
  mealcategoryID: string
) {
  try {
    await Promise.all(
      createTargetFoods.map(async (createTargetFood: any) => {
        const { id, ...rest } = createTargetFood
        const variables = { input: { ...rest, mealcategoryID } }

        await API.graphql<GraphQLQuery<CreateFoodMutation>>({
          query: createFood,
          variables,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    console.log('Error creating food:', err)
  }
}

export async function deleteFoods(deleteTargetFoods: any) {
  try {
    await Promise.all(
      deleteTargetFoods.map(async (deleteTargetFood: any) => {
        const { id, _version } = deleteTargetFood
        const deleteFoodInput: DeleteFoodInput = { id, _version }

        await API.graphql<GraphQLQuery<DeleteFoodMutation>>({
          query: deleteFood,
          variables: { input: deleteFoodInput },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    console.log('Error deleting food:', err)
  }
}

export async function updateFoods(updateTargetFoods: any) {
  try {
    await Promise.all(
      updateTargetFoods.map(async (updateTargetFood: any) => {
        // Exclude not necessary property
        const {
          __typename,
          createdAt,
          updatedAt,
          _deleted,
          _lastChangedAt,
          owner,
          ...updateFoodInput
        } = updateTargetFood

        await API.graphql<GraphQLQuery<UpdateFoodMutation>>({
          query: updateFood,
          variables: { input: updateFoodInput },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      })
    )
  } catch (err) {
    console.log('Error updating food:', err)
  }
}

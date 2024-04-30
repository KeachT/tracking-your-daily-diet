import { randomId } from '@mantine/hooks'
import _differenceWith from 'lodash.differencewith'
import _isEqual from 'lodash.isequal'
import { diff, sort, sum } from 'radash'

import { createFoods, deleteFoods, fetchMealDate, updateFoods } from './api'
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
    calories: '',
    protein: '',
    carbohydrates: '',
    fat: '',
  }
}

/**
 * The createInitialFormValues function generates initial form values based on the given mealCategoryNames and mealCategories.
 *
 * @param mealCategoryNames - An array of meal category names.
 * @param mealCategories - The meal categories object.
 * @returns The initial form values.
 */
export const createInitialFormValues = (
  mealCategoryNames: string[],
  mealCategories: any
) => {
  return mealCategoryNames.reduce((formValues, mealCategoryName) => {
    const mealCategory = mealCategories.find(
      (mealCategory: any) => mealCategory?.name === mealCategoryName
    )

    const mealCategoryFoods = mealCategory?.foods?.items || [
      createFoodInitialValues(),
    ]
    const sortedFoods = sort([...mealCategoryFoods], (f) => f.calories, true)

    return { ...formValues, [mealCategoryName]: sortedFoods }
  }, {})
}

/**
 * Creates an array of objects containing the sum of nutritions in the forms.
 *
 * @param forms - The forms object containing the values to be summed.
 * @returns The array of objects with the sum of values for calories, protein, fat, and carbohydrates.
 */
export const createSumNutritionValues = (forms: FormsType) => {
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
 * Saves foods to a meal category.
 *
 * @param mealCategoryName - The name of the meal category.
 * @param forms - The forms data.
 * @param mealDate - The meal date.
 * @param setMealDate - A function to set the meal date.
 * @param mealCategories - The meal categories.
 * @param setMealCategories - A function to set the meal categories.
 */
export const saveFoods = (
  mealCategoryName: string,
  forms: FormsType,
  mealDate: any,
  setMealDate: any,
  mealCategories: any,
  setMealCategories: any
) => {
  const formFoods = forms.values[mealCategoryName]
  const formFoodIds = formFoods?.map((targetFormValue) => targetFormValue?.id)

  const mealCategory = mealCategories.find(
    (mealCategory: any) => mealCategory?.name === mealCategoryName
  )
  const mealCategoryFoods = mealCategory?.foods?.items
  const mealCategoriesFoodIds = mealCategoryFoods?.map(
    (targetMealCategory: any) => targetMealCategory?.id
  )

  const newFoodIds = diff(formFoodIds, mealCategoriesFoodIds)
  const removedFoodIds = diff(mealCategoriesFoodIds, formFoodIds)
  const updatedFoodIds = formFoodIds?.filter(
    (id) => !newFoodIds.includes(id) && !removedFoodIds.includes(id)
  )

  const newFoodIdsSet = new Set(newFoodIds)
  const removedFoodIdsSet = new Set(removedFoodIds)
  const updatedFoodIdsSet = new Set(updatedFoodIds)

  const newFoods = formFoods?.filter((formFood) =>
    newFoodIdsSet.has(formFood.id)
  )
  const removedFoods = mealCategoryFoods?.filter((mealCategoryFood: any) =>
    removedFoodIdsSet.has(mealCategoryFood.id)
  )
  const foodsDiff = getDifferentObjects(formFoods, mealCategoryFoods)
  const updatedFoods = foodsDiff.filter((food) =>
    updatedFoodIdsSet.has(food.id)
  )

  if (newFoods.length > 0) createFoods(newFoods, mealCategory.id)
  if (removedFoods.length > 0) deleteFoods(removedFoods)
  if (updatedFoods.length > 0) updateFoods(updatedFoods)

  fetchMealDate(mealDate?.id, setMealDate, setMealCategories)
}

/**
 * Get an array of objects that are present in the first array but not in the second array.
 * @param array1 - The first array to compare.
 * @param array2 - The second array to compare.
 * @returns An array of objects that are present in the first array but not in the second array.
 */
const getDifferentObjects = (array1: any, array2: any) => {
  return _differenceWith(array1, array2, _isEqual)
}

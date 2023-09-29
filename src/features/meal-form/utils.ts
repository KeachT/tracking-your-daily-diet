import { randomId } from '@mantine/hooks'
import { diff, sum } from 'radash'

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
  const targetFormValues = forms.values[mealCategoryName]
  const targetFormValuesFoodIds = targetFormValues?.map(
    (targetFormValue) => targetFormValue?.id
  )

  const targetMealCategory = mealCategories.find(
    (mealCategory: any) => mealCategory?.name === mealCategoryName
  )
  const targetMealCategoryFoods = targetMealCategory?.foods?.items
  const targetMealCategoriesFoodIds = targetMealCategoryFoods?.map(
    (targetMealCategory: any) => targetMealCategory?.id
  )

  const createFoodIds = diff(
    targetFormValuesFoodIds,
    targetMealCategoriesFoodIds
  )
  const deleteFoodIds = diff(
    targetMealCategoriesFoodIds,
    targetFormValuesFoodIds
  )
  const updateFoodIds = targetFormValuesFoodIds?.filter(
    (id) => !createFoodIds.includes(id) && !deleteFoodIds.includes(id)
  )

  const createFoodIdsSet = new Set(createFoodIds)
  const deleteFoodIdsSet = new Set(deleteFoodIds)
  const updateFoodIdsSet = new Set(updateFoodIds)

  const createTargetFoods = targetFormValues?.filter((formValue) =>
    createFoodIdsSet.has(formValue.id)
  )
  const deleteTargetFoods = targetMealCategoryFoods?.filter(
    (targetMealCategoryFood: any) =>
      deleteFoodIdsSet.has(targetMealCategoryFood.id)
  )
  const updateTargetFoods = targetFormValues?.filter((formValue) =>
    updateFoodIdsSet.has(formValue.id)
  )

  createTargetFoods.length > 0 &&
    createFoods(createTargetFoods, targetMealCategory.id)
  deleteTargetFoods.length > 0 && deleteFoods(deleteTargetFoods)
  updateTargetFoods.length > 0 && updateFoods(updateTargetFoods)

  fetchMealDate(mealDate?.id, setMealDate, setMealCategories)
}

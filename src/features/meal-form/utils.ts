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

    const sortedFoods = [...mealCategoryFoods].sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt)
    )

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

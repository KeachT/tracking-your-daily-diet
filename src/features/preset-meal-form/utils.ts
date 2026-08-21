import { createId } from '@paralleldrive/cuid2'
import { sort, sum } from 'radash'

import { MealCategoryName } from '@/constants'

import {
  CreateUserMealPresetInput,
  CreateUserMealPresetMutationVariables,
  FoodItem,
  UpdateUserMealPresetInput,
  UpdateUserMealPresetMutationVariables,
  UserMealPreset,
} from '../../API'
import {
  addUserMealPreset,
  updUserMealPreset,
} from '../../api/user-meal-preset'
import { useUserMealPresetStore } from '../../stores'
import { FormData, FormsType } from './types'

type MealPresetFieldName = Lowercase<`${MealCategoryName}`>

export { createFoodInitialValues } from '../../utils/createFoodInitialValues'

/**
 * Normalizes the food items within a specific meal category from the given forms.
 *
 * @param {FormsType} forms - The forms object containing meal data.
 * @param {string} mealCategoryName - The name of the meal category to normalize foods for.
 * @returns {Array<{ id: string, name: string, calories: number, protein: number, carbohydrates: number, fat: number }>}
 * An array of normalized food objects with numeric values for calories, protein, carbohydrates, and fat.
 */
const normalizeFoods = (values: FormData, mealCategoryName: string) => {
  const foods = values[mealCategoryName] || []

  const normalizedFoods = foods.map((food) => {
    const { id, name, calories, protein, carbohydrates, fat } = food
    return {
      id,
      name,
      calories: Number(calories || 0),
      protein: Number(protein || 0),
      carbohydrates: Number(carbohydrates || 0),
      fat: Number(fat || 0),
    }
  })

  return normalizedFoods
}

/**
 * Normalizes all meal categories from the form into API-compatible data.
 *
 * @param forms - The forms containing meal data organized by category
 * @returns An object keyed by lowercase meal category, each holding normalized foods
 */
const normalizeAllMealCategories = (
  forms: FormsType,
): Record<MealPresetFieldName, ReturnType<typeof normalizeFoods>> => {
  const currentValues = forms.getValues()
  const mealCategoryNames = Object.values(MealCategoryName)

  const normalizedEntries = mealCategoryNames.map((mealCategoryName) => {
    const categoryKey = mealCategoryName.toLowerCase() as MealPresetFieldName
    const foods = normalizeFoods(currentValues, mealCategoryName)
    return [categoryKey, foods]
  })

  const normalizedPresetByCategory = Object.fromEntries(
    normalizedEntries,
  ) as Record<MealPresetFieldName, ReturnType<typeof normalizeFoods>>

  return normalizedPresetByCategory
}

/**
 * Creates initial form values for UserMealPreset data
 *
 * @param userMealPreset - The user meal preset object
 * @returns The initial form values with preset data
 */
export const createInitialFormValuesFromPreset = (
  userMealPreset: UserMealPreset | null,
) => {
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  const initialFormValues = mealCategoryNames.reduce(
    (formValues, mealCategoryName) => {
      const categoryKey = mealCategoryName.toLowerCase() as keyof UserMealPreset
      const foods =
        userMealPreset && Array.isArray(userMealPreset[categoryKey])
          ? (userMealPreset[categoryKey] as FoodItem[])
          : []
      const sortedFoods = sort([...foods], (f) => f?.calories || 0, true)
      return { ...formValues, [mealCategoryName]: sortedFoods }
    },
    {},
  )

  return initialFormValues
}

/**
 * Calculates the sum of nutritional values from all foods in the forms object.
 *
 * @param forms - The forms object containing food items with nutritional information.
 * @returns An object with the following properties:
 *   - sumCalories - The sum of calories across all foods.
 *   - sumProtein - The sum of protein across all foods.
 *   - sumFat - The sum of fat across all foods.
 *   - sumCarbohydrates - The sum of carbohydrates across all foods.
 */
export const createSumNutritionValues = (forms: FormsType) => {
  const currentValues = forms.getValues()
  const allFoods = Object.values(currentValues).flat()

  const sumCalories = sum(allFoods, (f) => Number(f?.calories || 0))
  const sumProtein = sum(allFoods, (f) => Number(f?.protein || 0))
  const sumFat = sum(allFoods, (f) => Number(f?.fat || 0))
  const sumCarbohydrates = sum(allFoods, (f) => Number(f?.carbohydrates || 0))

  return {
    sumCalories,
    sumProtein,
    sumFat,
    sumCarbohydrates,
  }
}

/**
 * Saves all meal categories for the current user preset at once.
 *
 * Saving is refused unless the preset was actually loaded: an unloaded preset
 * is still null and would otherwise be read as "no preset yet" and create a
 * duplicate record alongside the existing one.
 *
 * @param forms - The forms containing the meal preset data for every category
 * @param userMealPreset - The existing user meal preset object (null when creating)
 * @param setUserMealPreset - The function to update the local user meal preset state
 */
export const saveAllUserMealPreset = async (
  forms: FormsType,
  userMealPreset: UserMealPreset | null,
  setUserMealPreset: (userMealPreset: UserMealPreset) => void,
) => {
  if (useUserMealPresetStore.getState().loadStatus !== 'ready') {
    throw new Error('Cannot save a user meal preset that has not been loaded')
  }

  const normalizedPreset = normalizeAllMealCategories(forms)

  if (userMealPreset) {
    const updateUserMealPresetInput: UpdateUserMealPresetInput = {
      id: userMealPreset.id,
      ...normalizedPreset,
    }
    const variables: UpdateUserMealPresetMutationVariables = {
      input: updateUserMealPresetInput,
    }
    const updatedPreset = await updUserMealPreset(variables)
    setUserMealPreset(updatedPreset)
    return
  }

  const createUserMealPresetInput: CreateUserMealPresetInput = {
    id: createId(),
    ...normalizedPreset,
  }
  const variables: CreateUserMealPresetMutationVariables = {
    input: createUserMealPresetInput,
  }
  const newPreset = await addUserMealPreset(variables)
  setUserMealPreset(newPreset)
}

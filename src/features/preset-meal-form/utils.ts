import { createId } from '@paralleldrive/cuid2'
import _differenceWith from 'lodash.differencewith'
import _isEqual from 'lodash.isequal'
import { sort } from 'radash'
import { Dispatch, SetStateAction } from 'react'

import {
  CreateUserMealPresetInput,
  CreateUserMealPresetMutationVariables,
  FoodItem,
  MealCategoryName,
  UpdateUserMealPresetInput,
  UpdateUserMealPresetMutationVariables,
  UserMealPreset,
} from '../../API'
import {
  addUserMealPreset,
  fetchUserMealPreset,
  updUserMealPreset,
} from '../../api/user-meal-preset'
import { UserMealPresetState } from './stores'
import { FormField, FormsType } from './types'

/**
 * Creates initial values for a food form.
 *
 * @returns The initial values object with empty name and zero values for calories, protein, carbohydrates, fat, and a randomly generated key.
 */
export const createFoodInitialValues = (): FormField => {
  return {
    id: createId(),
    name: '',
    calories: '',
    protein: '',
    carbohydrates: '',
    fat: '',
  }
}

/**
 * Normalizes the food items within a specific meal category from the given forms.
 *
 * @param {FormsType} forms - The forms object containing meal data.
 * @param {string} mealCategoryName - The name of the meal category to normalize foods for.
 * @returns {Array<{ id: string, name: string, calories: number, protein: number, carbohydrates: number, fat: number }>}
 * An array of normalized food objects with numeric values for calories, protein, carbohydrates, and fat.
 */
const normalizeFoods = (forms: FormsType, mealCategoryName: string) => {
  const foods = forms.values[mealCategoryName]

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
 * Creates initial form values for UserMealPreset data
 *
 * @param userMealPreset - The user meal preset object
 * @returns The initial form values with preset data
 */
export const createInitialFormValuesFromPreset = (
  userMealPreset: UserMealPreset | null
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
    {}
  )

  return initialFormValues
}

/**
 * Saves a user meal preset for a specific category
 *
 * @param forms - The forms containing the meal preset data
 * @param mealCategoryName - The name of the meal category to save
 * @param userMealPreset - The current user meal preset object
 * @param setUserMealPreset - The function to update the user meal preset
 *
 * @returns A promise that resolves when the preset has been saved
 */
export const saveUserMealPreset = async (
  forms: FormsType,
  mealCategoryName: string,
  userMealPreset: UserMealPreset | null,
  setUserMealPreset: (userMealPreset: UserMealPreset) => void
) => {
  const normalizedFoods = normalizeFoods(forms, mealCategoryName)
  const categoryKey = mealCategoryName.toLowerCase()

  try {
    // Check if the userMealPreset exists
    if (userMealPreset) {
      const updateUserMealPresetInput: UpdateUserMealPresetInput = {
        id: userMealPreset.id,
        [categoryKey]: normalizedFoods,
        _version: userMealPreset._version,
      }
      const variables: UpdateUserMealPresetMutationVariables = {
        input: updateUserMealPresetInput,
      }
      const updatedPreset = await updUserMealPreset(variables)
      setUserMealPreset(updatedPreset)
      return true
    } else {
      const createUserMealPresetInput: CreateUserMealPresetInput = {
        id: createId(),
        [categoryKey]: normalizedFoods,
      }
      const variables: CreateUserMealPresetMutationVariables = {
        input: createUserMealPresetInput,
      }
      const newPreset = await addUserMealPreset(variables)
      setUserMealPreset(newPreset)
      return true
    }
  } catch (error) {
    console.error('Error saving user meal preset:', error)
    throw error
  }
}

/**
 * Loads the user meal preset and sets it in the state.
 *
 * @param setUserMealPreset - The function to update the user meal preset state.
 * @param setIsLoading - The function to update the loading state.
 * @returns A promise that resolves when the user meal preset has been loaded.
 */
export const loadUserMealPreset = async (
  setUserMealPreset: UserMealPresetState['setUserMealPreset'],
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  setIsLoading(true)
  try {
    await fetchAndSetUserMealPreset(setUserMealPreset)
  } catch (error) {
    console.error('Failed to load user meal preset:', error)
  } finally {
    setIsLoading(false)
  }
}

/**
 * Fetches and sets the user meal preset.
 *
 * @param setUserMealPreset - The function to update the user meal preset state.
 * @returns A promise that resolves when the user meal preset has been fetched.
 */
export const fetchAndSetUserMealPreset = async (
  setUserMealPreset: UserMealPresetState['setUserMealPreset']
) => {
  try {
    const userMealPreset = await fetchUserMealPreset()
    if (userMealPreset) {
      setUserMealPreset(userMealPreset)
    }
    return userMealPreset
  } catch (error) {
    console.error('Error fetching user meal preset:', error)
    throw error
  }
}

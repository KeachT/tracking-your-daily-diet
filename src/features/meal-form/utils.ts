import { randomId } from '@mantine/hooks'
import _differenceWith from 'lodash.differencewith'
import _isEqual from 'lodash.isequal'
import { sort, sum } from 'radash'

import {
  CreateMealRecordInput,
  CreateMealRecordMutationVariables,
  ListMealRecordsQueryVariables,
  MealCategoryName,
  UpdateMealRecordInput,
  UpdateMealRecordMutationVariables,
} from '../../API'
import {
  addMealRecord,
  fetchMealRecords,
  updMealRecord,
} from '../../api/meal-record'
import { MealRecordsState } from './stores'
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
 * The createInitialFormValues function generates initial form values based on the given mealCategoryNames and mealRecords.
 *
 * @param mealRecords - The meal records array.
 * @returns The initial form values.
 */
export const createInitialFormValues = (
  mealRecords: MealRecordsState['mealRecords']
) => {
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  const initialFormValues = mealCategoryNames.reduce(
    (formValues, mealCategoryName) => {
      const mealRecord = mealRecords.find(
        (mealRecord) => mealRecord?.category === mealCategoryName
      )

      const foods = mealRecord?.foods || []
      const sortedFoods = sort([...foods], (f) => f?.calories || 0, true)

      return { ...formValues, [mealCategoryName]: sortedFoods }
    },
    {}
  )

  return initialFormValues
}

/**
 * Calculates the sum of nutritional values (calories, protein, fat, and carbohydrates)
 * from a given set of forms.
 *
 * @param {FormsType} forms - The forms containing daily food entries categorized by type.
 * @returns {Object} An object containing the summed nutritional values:
 * - `sumDailyCalories`: Total calories from all food entries.
 * - `sumDailyProtein`: Total protein from all food entries.
 * - `sumDailyFat`: Total fat from all food entries.
 * - `sumDailyCarbohydrates`: Total carbohydrates from all food entries.
 */
export const createSumNutritionValues = (forms: FormsType) => {
  const dailyFoodsByCategory = Object.values(forms.values)
  const dailyFoods = dailyFoodsByCategory.flat()

  const sumDailyCalories = sum(dailyFoods.flat(), (f) =>
    Number(f.calories || 0)
  )
  const sumDailyProtein = sum(dailyFoods.flat(), (f) => Number(f.protein || 0))
  const sumDailyFat = sum(dailyFoods.flat(), (f) => Number(f.fat || 0))
  const sumDailyCarbohydrates = sum(dailyFoods.flat(), (f) =>
    Number(f.carbohydrates || 0)
  )

  return {
    sumDailyCalories,
    sumDailyProtein,
    sumDailyFat,
    sumDailyCarbohydrates,
  }
}

/**
 * Saves a meal record by either updating an existing record or creating a new one.
 *
 * @param forms - The form data containing meal information.
 * @param mealCategoryName - The name of the meal category (e.g., breakfast, lunch, dinner).
 * @param currentDateString - The current date as a string.
 * @param mealRecords - The current state of meal records.
 *
 * @returns A promise that resolves when the meal record has been saved.
 */
export const saveMealRecord = async (
  forms: FormsType,
  mealCategoryName: string,
  currentDateString: string,
  mealRecords: MealRecordsState['mealRecords']
) => {
  const mealRecord = mealRecords.find(
    (mealRecord) => mealRecord?.category === mealCategoryName
  )

  if (mealRecord) {
    const normalizedFoods = normalizeFoods(forms, mealCategoryName)

    const updateMealRecordInput: UpdateMealRecordInput = {
      id: mealRecord.id,
      date: mealRecord.date,
      category: mealRecord.category,
      foods: normalizedFoods,
      _version: mealRecord._version,
    }

    const variables: UpdateMealRecordMutationVariables = {
      input: updateMealRecordInput,
    }

    updMealRecord(variables)
  }

  if (!mealRecord) {
    const normalizedFoods = normalizeFoods(forms, mealCategoryName)

    const createMealRecordInput: CreateMealRecordInput = {
      id: randomId(),
      date: currentDateString,
      category: mealCategoryName as MealCategoryName,
      foods: normalizedFoods,
    }

    const variables: CreateMealRecordMutationVariables = {
      input: createMealRecordInput,
    }

    addMealRecord(variables)
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
 * Fetches meal records for a given date and updates the state with the fetched records.
 *
 * @param currentDateString - The date string for which to fetch meal records.
 * @param setMealRecords - The state setter function to update meal records.
 * @returns A promise that resolves when the meal records have been fetched and the state has been updated.
 */
export const fetchAndSetMealRecords = async (
  currentDateString: string,
  setMealRecords: MealRecordsState['setMealRecords']
) => {
  const variables: ListMealRecordsQueryVariables = {
    filter: {
      date: { eq: currentDateString },
    },
  }

  const uniqueMealRecordsWithFoods = await fetchMealRecords(variables)
  setMealRecords(uniqueMealRecordsWithFoods as MealRecordsState['mealRecords'])
}

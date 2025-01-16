import { randomId } from '@mantine/hooks'
import _differenceWith from 'lodash.differencewith'
import _isEqual from 'lodash.isequal'
import { sort, sum } from 'radash'

import { MealCategoryName } from '@/API'

import { addMealRecord, updMealRecord } from './api'
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
 * Saves a meal record by either updating an existing record or creating a new one
 *
 * @param forms - The form data containing meal information.
 * @param mealCategoryName - The name of the meal category (e.g., breakfast, lunch, dinner).
 * @param currentDateString - The current date as a string.
 * @param mealRecords - The list of existing meal records.
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
    await updMealRecord(forms, mealCategoryName, mealRecord)
  }

  if (!mealRecord) {
    await addMealRecord(forms, mealCategoryName, currentDateString)
  }
}

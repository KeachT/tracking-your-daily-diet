import { randomId } from '@mantine/hooks'
import _differenceWith from 'lodash.differencewith'
import _isEqual from 'lodash.isequal'
import { sort, sum } from 'radash'

import { MealCategoryName } from '@/API'

import { MealRecordsState } from '../../stores'
import { addMealRecord, updMealRecord } from './api'
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
 * Saves a meal record by either updating an existing record or creating a new one.
 *
 * @param forms - The form data containing meal information.
 * @param mealCategoryName - The name of the meal category (e.g., breakfast, lunch, dinner).
 * @param currentDateString - The current date as a string.
 * @param mealRecords - The list of existing meal records
 */
export const saveMealRecord = (
  forms: FormsType,
  mealCategoryName: string,
  currentDateString: string,
  mealRecords: MealRecordsState['mealRecords']
) => {
  const mealRecord = mealRecords.find(
    (mealRecord) => mealRecord?.category === mealCategoryName
  )

  if (mealRecord) {
    updMealRecord(forms, mealCategoryName, mealRecord)
  }

  if (!mealRecord) {
    addMealRecord(forms, mealCategoryName, currentDateString)
  }
}

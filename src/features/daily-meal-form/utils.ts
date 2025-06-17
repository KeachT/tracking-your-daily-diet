import { createId } from '@paralleldrive/cuid2'
import { sort, sum } from 'radash'

import {
  CreateDailyMealRecordInput,
  CreateDailyMealRecordMutationVariables,
  DailyMealRecord,
  FoodItem,
  ListDailyMealRecordsQueryVariables,
  UpdateDailyMealRecordInput,
  UpdateDailyMealRecordMutationVariables,
} from '../../API'
import {
  addDailyMealRecord,
  fetchDailyMealRecords,
  updDailyMealRecord,
} from '../../api/daily-meal-record'
import { MealCategoryName } from '../../models'
import { LoadingState } from '../../stores'
import { DailyMealRecordsState } from './stores/dailyMealRecords'
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
 * Returns the default meal category based on the current hour of the day.
 *
 * - If the current hour is before 11 AM, it returns `MealCategoryName.BREAKFAST`.
 * - If the current hour is between 11 AM and 2 PM, it returns `MealCategoryName.LUNCH`.
 * - If the current hour is between 2 PM and 5 PM, it returns `MealCategoryName.SNACK`.
 * - If the current hour is after 5 PM, it returns `MealCategoryName.DINNER`.
 *
 * @returns {MealCategoryName} The default meal category for the current time.
 */
export const getDefaultCategory = () => {
  const currentHour = new Date().getHours()
  if (currentHour < 11) {
    return MealCategoryName.BREAKFAST
  }
  if (currentHour < 14) {
    return MealCategoryName.LUNCH
  }
  if (currentHour < 17) {
    return MealCategoryName.SNACK
  }
  return MealCategoryName.DINNER
}

/**
 * Calculates the sum of nutritional values (calories, protein, fat, and carbohydrates)
 * from a given set of forms.
 *
 * @param {FormsType} forms - The forms containing food entries categorized by type.
 * @returns {Object} An object containing the summed nutritional values:
 * - `sumCalories`: Total calories from all food entries.
 * - `sumProtein`: Total protein from all food entries.
 * - `sumFat`: Total fat from all food entries.
 * - `sumCarbohydrates`: Total carbohydrates from all food entries.
 */
export const createSumNutritionValues = (forms: FormsType) => {
  const allFoods = Object.values(forms.values).flat()

  const sumCalories = sum(allFoods, (f) => Number(f.calories || 0))
  const sumProtein = sum(allFoods, (f) => Number(f.protein || 0))
  const sumFat = sum(allFoods, (f) => Number(f.fat || 0))
  const sumCarbohydrates = sum(allFoods, (f) => Number(f.carbohydrates || 0))

  return {
    sumCalories,
    sumProtein,
    sumFat,
    sumCarbohydrates,
  }
}

/**
 * Asynchronously loads daily meal records for a specific date.
 *
 * @param currentDateString - The date string to filter daily meal records by
 * @param setDailyMealRecords - Function to update the daily meal records in state
 * @param setIsDataLoading - Function to update the loading state
 *
 * @remarks
 * This function handles the loading state by setting it to true before fetching
 * and resetting it to false after the operation completes (whether successful or not).
 *
 * @returns A Promise that resolves when the daily meal records have been loaded and state updated
 */
export const loadDailyMealRecords = async (
  currentDateString: string,
  setDailyMealRecords: DailyMealRecordsState['setDailyMealRecords'],
  setIsDataLoading: LoadingState['setIsDataLoading']
) => {
  setIsDataLoading(true)
  try {
    const variables: ListDailyMealRecordsQueryVariables = {
      filter: {
        date: { eq: currentDateString },
      },
    }
    const uniqueDailyMealRecordsWithFoods = await fetchDailyMealRecords(
      variables
    )
    setDailyMealRecords(
      uniqueDailyMealRecordsWithFoods as DailyMealRecordsState['dailyMealRecords']
    )
  } finally {
    setIsDataLoading(false)
  }
}

/**
 * Creates initial values for a DailyMealRecord form.
 *
 * @param dailyMealRecord - Optional existing daily meal record to populate values.
 * @returns The initial form values for DailyMealRecord.
 */
export const createDailyMealRecordInitialValues = (
  dailyMealRecord?: DailyMealRecord | null
) => {
  const mealCategoryMapping = {
    [MealCategoryName.BREAKFAST]: 'breakfast',
    [MealCategoryName.LUNCH]: 'lunch',
    [MealCategoryName.DINNER]: 'dinner',
    [MealCategoryName.SNACK]: 'snack',
  }

  const initialFormValues = Object.values(MealCategoryName).reduce(
    (formValues, mealCategoryName) => {
      const categoryKey = mealCategoryMapping[mealCategoryName]
      const foods =
        (dailyMealRecord?.[
          categoryKey as keyof Pick<
            DailyMealRecord,
            'breakfast' | 'lunch' | 'dinner' | 'snack'
          >
        ] as FoodItem[]) || []
      const sortedFoods = sort([...foods], (f) => f?.calories || 0, true)
      return { ...formValues, [mealCategoryName]: sortedFoods }
    },
    {}
  )

  return initialFormValues
}

/**
 * Saves and sets a DailyMealRecord based on the provided forms and current date string.
 *
 * @param forms - The forms containing the meal data to be saved.
 * @param currentDateString - The current date as a string.
 * @param dailyMealRecord - The existing daily meal record (if any).
 * @param setDailyMealRecord - The function to update the state of daily meal record.
 *
 * @returns A promise that resolves when the daily meal record has been saved and the state has been updated.
 */
export const saveAndSetDailyMealRecord = async (
  forms: FormsType,
  currentDateString: string,
  dailyMealRecord: DailyMealRecord | null,
  setDailyMealRecord: (dailyMealRecord: DailyMealRecord) => void
) => {
  const normalizedFoods = normalizeDailyMealRecordFoods(forms)

  if (dailyMealRecord) {
    const updateDailyMealRecordInput: UpdateDailyMealRecordInput = {
      id: dailyMealRecord.id,
      date: dailyMealRecord.date,
      breakfast: normalizedFoods.breakfast,
      lunch: normalizedFoods.lunch,
      dinner: normalizedFoods.dinner,
      snack: normalizedFoods.snack,
      _version: dailyMealRecord._version,
    }
    const variables: UpdateDailyMealRecordMutationVariables = {
      input: updateDailyMealRecordInput,
    }
    const updatedDailyMealRecord = await updDailyMealRecord(variables)
    setDailyMealRecord(updatedDailyMealRecord)
  } else {
    const createDailyMealRecordInput: CreateDailyMealRecordInput = {
      id: createId(),
      date: currentDateString,
      breakfast: normalizedFoods.breakfast,
      lunch: normalizedFoods.lunch,
      dinner: normalizedFoods.dinner,
      snack: normalizedFoods.snack,
    }
    const variables: CreateDailyMealRecordMutationVariables = {
      input: createDailyMealRecordInput,
    }
    const newDailyMealRecord = await addDailyMealRecord(variables)
    setDailyMealRecord(newDailyMealRecord)
  }
}

/**
 * Normalizes the food items from all meal categories in the given forms.
 *
 * @param {FormsType} forms - The forms object containing meal data.
 * @returns An object with normalized food arrays for each meal category.
 */
const normalizeDailyMealRecordFoods = (forms: FormsType) => {
  const normalizeCategory = (categoryName: string) => {
    const foods = forms.values[categoryName] || []
    return foods.map((food) => {
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
  }

  return {
    breakfast: normalizeCategory(MealCategoryName.BREAKFAST),
    lunch: normalizeCategory(MealCategoryName.LUNCH),
    dinner: normalizeCategory(MealCategoryName.DINNER),
    snack: normalizeCategory(MealCategoryName.SNACK),
  }
}

/**
 * Asynchronously loads daily meal record for a specific date.
 *
 * @param currentDateString - The date string to filter daily meal records by
 * @param setDailyMealRecord - Function to update the daily meal record in state
 * @param setIsDataLoading - Function to update the loading state
 *
 * @returns A Promise that resolves when the daily meal record has been loaded and state updated
 */
export const loadDailyMealRecord = async (
  currentDateString: string,
  setDailyMealRecord: (dailyMealRecord: DailyMealRecord | null) => void,
  setIsDataLoading: LoadingState['setIsDataLoading']
) => {
  setIsDataLoading(true)
  try {
    const variables: ListDailyMealRecordsQueryVariables = {
      filter: {
        date: { eq: currentDateString },
      },
    }
    const dailyMealRecords = await fetchDailyMealRecords(variables)
    const dailyMealRecord =
      dailyMealRecords.length > 0 ? dailyMealRecords[0] : null
    setDailyMealRecord(dailyMealRecord)
  } finally {
    setIsDataLoading(false)
  }
}

/**
 * Saves and updates a DailyMealRecord in the records array.
 *
 * @param forms - The forms containing the meal data to be saved.
 * @param currentDateString - The current date as a string.
 * @param dailyMealRecord - The existing daily meal record (if any).
 * @param setDailyMealRecords - The function to update the state of daily meal records array.
 *
 * @returns A promise that resolves when the daily meal record has been saved and the state has been updated.
 */
export const saveAndSetDailyMealRecordsArray = async (
  forms: FormsType,
  currentDateString: string,
  dailyMealRecord: DailyMealRecord | null,
  setDailyMealRecords: (dailyMealRecords: DailyMealRecord[]) => void,
  currentDailyMealRecords: DailyMealRecord[]
) => {
  const normalizedFoods = normalizeDailyMealRecordFoods(forms)

  if (dailyMealRecord) {
    const updateDailyMealRecordInput: UpdateDailyMealRecordInput = {
      id: dailyMealRecord.id,
      date: dailyMealRecord.date,
      breakfast: normalizedFoods.breakfast,
      lunch: normalizedFoods.lunch,
      dinner: normalizedFoods.dinner,
      snack: normalizedFoods.snack,
      _version: dailyMealRecord._version,
    }
    const variables: UpdateDailyMealRecordMutationVariables = {
      input: updateDailyMealRecordInput,
    }
    const updatedDailyMealRecord = await updDailyMealRecord(variables)
    const newDailyMealRecords = currentDailyMealRecords.map((record) =>
      record.date === currentDateString ? updatedDailyMealRecord : record
    )
    setDailyMealRecords(newDailyMealRecords)
  } else {
    const createDailyMealRecordInput: CreateDailyMealRecordInput = {
      id: createId(),
      date: currentDateString,
      breakfast: normalizedFoods.breakfast,
      lunch: normalizedFoods.lunch,
      dinner: normalizedFoods.dinner,
      snack: normalizedFoods.snack,
    }
    const variables: CreateDailyMealRecordMutationVariables = {
      input: createDailyMealRecordInput,
    }
    const newDailyMealRecord = await addDailyMealRecord(variables)
    const newDailyMealRecords = [...currentDailyMealRecords, newDailyMealRecord]
    setDailyMealRecords(newDailyMealRecords)
  }
}

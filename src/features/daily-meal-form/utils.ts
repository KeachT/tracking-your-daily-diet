import { createId } from '@paralleldrive/cuid2'
import { sort, sum } from 'radash'

import {
  CreateDailyMealRecordInput,
  CreateDailyMealRecordMutationVariables,
  CreateMealRecordInput,
  CreateMealRecordMutationVariables,
  DailyMealRecord,
  FoodItem,
  ListDailyMealRecordsQueryVariables,
  ListMealRecordsQueryVariables,
  MealCategoryName,
  UpdateDailyMealRecordInput,
  UpdateDailyMealRecordMutationVariables,
  UpdateMealRecordInput,
  UpdateMealRecordMutationVariables,
} from '../../API'
import {
  addDailyMealRecord,
  fetchDailyMealRecords,
  updDailyMealRecord,
} from '../../api/daily-meal-record'
import {
  addMealRecord,
  fetchMealRecords,
  updMealRecord,
} from '../../api/meal-record'
import { LoadingState } from '../../stores'
import { MealRecordsState } from './stores'
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
 * Saves and sets a meal record based on the provided forms, meal category name, and current date string.
 *
 * @param forms - The forms containing the meal data to be saved.
 * @param mealCategoryName - The name of the meal category (e.g., breakfast, lunch, dinner).
 * @param currentDateString - The current date as a string.
 * @param mealRecords - The current state of meal records.
 * @param setMealRecords - The function to update the state of meal records.
 *
 * @returns A promise that resolves when the meal record has been saved and the state has been updated.
 */
export const saveAndSetMealRecord = async (
  forms: FormsType,
  mealCategoryName: string,
  currentDateString: string,
  mealRecords: MealRecordsState['mealRecords'],
  setMealRecords: MealRecordsState['setMealRecords']
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
    const updatedMealRecord = await updMealRecord(variables)
    const newMealRecords = mealRecords.map((mealRecord) =>
      mealRecord?.category === mealCategoryName ? updatedMealRecord : mealRecord
    )
    setMealRecords(newMealRecords as MealRecordsState['mealRecords'])
  }

  if (!mealRecord) {
    const normalizedFoods = normalizeFoods(forms, mealCategoryName)
    const createMealRecordInput: CreateMealRecordInput = {
      id: createId(),
      date: currentDateString,
      category: mealCategoryName as MealCategoryName,
      foods: normalizedFoods,
    }
    const variables: CreateMealRecordMutationVariables = {
      input: createMealRecordInput,
    }
    const newMealRecord = await addMealRecord(variables)
    const newMealRecords = [...mealRecords, newMealRecord]
    setMealRecords(newMealRecords as MealRecordsState['mealRecords'])
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
 * Asynchronously loads meal records for a specific date.
 *
 * @param currentDateString - The date string to filter meal records by
 * @param setMealRecords - Function to update the meal records in state
 * @param setIsDataLoading - Function to update the loading state
 *
 * @remarks
 * This function handles the loading state by setting it to true before fetching
 * and resetting it to false after the operation completes (whether successful or not).
 *
 * @returns A Promise that resolves when the meal records have been loaded and state updated
 */
export const loadMealRecords = async (
  currentDateString: string,
  setMealRecords: MealRecordsState['setMealRecords'],
  setIsDataLoading: LoadingState['setIsDataLoading']
) => {
  setIsDataLoading(true)
  try {
    const variables: ListMealRecordsQueryVariables = {
      filter: {
        date: { eq: currentDateString },
      },
    }
    const uniqueMealRecordsWithFoods = await fetchMealRecords(variables)
    setMealRecords(
      uniqueMealRecordsWithFoods as MealRecordsState['mealRecords']
    )
  } finally {
    setIsDataLoading(false)
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
  const mealCategoryNames: string[] = ['breakfast', 'lunch', 'dinner', 'snack']

  const initialFormValues = mealCategoryNames.reduce(
    (formValues, mealCategoryName) => {
      const foods =
        (dailyMealRecord?.[
          mealCategoryName as keyof DailyMealRecord
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
    breakfast: normalizeCategory('BREAKFAST'),
    lunch: normalizeCategory('LUNCH'),
    dinner: normalizeCategory('DINNER'),
    snack: normalizeCategory('SNACK'),
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
 * Converts multiple MealRecords to a single DailyMealRecord format.
 *
 * @param mealRecords - Array of MealRecord objects to convert.
 * @param currentDateString - The date string for the daily meal record.
 * @returns A DailyMealRecord object with all meals consolidated.
 */
export const convertMealRecordsToDailyMealRecord = (
  mealRecords: MealRecordsState['mealRecords'],
  currentDateString: string
): Omit<
  DailyMealRecord,
  | 'id'
  | '__typename'
  | 'createdAt'
  | 'updatedAt'
  | '_version'
  | '_deleted'
  | '_lastChangedAt'
  | 'owner'
> => {
  const dailyMealRecord = {
    date: currentDateString,
    breakfast: [] as FoodItem[],
    lunch: [] as FoodItem[],
    dinner: [] as FoodItem[],
    snack: [] as FoodItem[],
  }

  mealRecords.forEach((mealRecord) => {
    if (!mealRecord?.foods) {
      return
    }

    const foods = mealRecord.foods.filter(
      (food): food is FoodItem => food !== null
    )

    if (mealRecord.category === MealCategoryName.BREAKFAST) {
      dailyMealRecord.breakfast = foods
    }
    if (mealRecord.category === MealCategoryName.LUNCH) {
      dailyMealRecord.lunch = foods
    }
    if (mealRecord.category === MealCategoryName.DINNER) {
      dailyMealRecord.dinner = foods
    }
    if (mealRecord.category === MealCategoryName.SNACK) {
      dailyMealRecord.snack = foods
    }
  })

  return dailyMealRecord
}

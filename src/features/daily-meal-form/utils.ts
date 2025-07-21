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
  UserMealPreset,
} from '../../API'
import {
  addDailyMealRecord,
  fetchDailyMealRecords,
  updDailyMealRecord,
} from '../../api/daily-meal-record'
import { MealCategoryName } from '../../models'
import { LoadingState } from '../../stores'
import { DailyMealRecordState } from './stores/dailyMealRecord'
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
    // This assumes that there is only one record per date.
    const dailyMealRecords = await fetchDailyMealRecords(variables)
    const dailyMealRecord = dailyMealRecords[0] || null
    setDailyMealRecord(dailyMealRecord)
  } finally {
    setIsDataLoading(false)
  }
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
  setDailyMealRecord: DailyMealRecordState['setDailyMealRecord']
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
 * Converts preset food items to form field format.
 *
 * @param presetFoods - The preset food items to convert.
 * @returns The converted form field data.
 */
export const convertPresetToFormData = (
  presetFoods: FoodItem[]
): FormField[] => {
  return presetFoods.map((presetFood) => ({
    id: createId(),
    name: presetFood.name,
    calories: presetFood.calories?.toString() || '',
    protein: presetFood.protein?.toString() || '',
    carbohydrates: presetFood.carbohydrates?.toString() || '',
    fat: presetFood.fat?.toString() || '',
  }))
}

/**
 * Gets preset foods for a specific meal category.
 *
 * @param userMealPreset - The user meal preset object.
 * @param mealCategoryName - The meal category name.
 * @returns The preset foods for the category or empty array.
 */
export const getPresetFoodsForCategory = (
  userMealPreset: UserMealPreset | null,
  mealCategoryName: MealCategoryName
): FoodItem[] => {
  if (!userMealPreset) {
    return []
  }

  const categoryKey = mealCategoryName.toLowerCase() as keyof Pick<
    UserMealPreset,
    'breakfast' | 'lunch' | 'dinner' | 'snack'
  >
  const presetFoods = userMealPreset[categoryKey] as FoodItem[] | null

  return presetFoods || []
}

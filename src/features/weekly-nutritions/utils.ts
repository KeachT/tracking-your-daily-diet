import { sum } from 'radash'

import { MealCategoryName, MealRecord } from '@/API'

import { fetchWeeklyDailyMealRecords } from '../../api/daily-meal-record'
import { fetchWeeklyMealRecords } from '../../api/meal-record'
import {
  CurrentDateState,
  LoadingState,
  WeeklyDailyMealRecordsState,
  WeeklyMealRecordsState,
} from '../../stores'
import {
  createPrevWeekDate,
  createStringFromDate,
  roundToTwoDecimalPlaces,
} from '../../utils'

/**
 * Generates the current date and the date of the previous week.
 *
 * @param {DateValue} currentDate - The value representing the current date.
 * @returns {{ currentDateString: string, prevWeekDateString: string }} An object containing date strings.
 */
export const createWeekDateString = (
  currentDate: CurrentDateState['currentDate']
) => {
  const currentDateString = createStringFromDate(currentDate)

  const prevWeekDate = createPrevWeekDate(currentDate)
  const prevWeekDateString = createStringFromDate(prevWeekDate)

  return { currentDateString, prevWeekDateString }
}

/**
 * Counts the maximum number of meal records with foods for each meal category in a week.
 *
 * @param weeklyMealRecords - An array of meal records for the week.
 * Each meal record should have a `foods` array and a `category` property.
 *
 * @returns The maximum count of meal records with foods for any meal category (breakfast, lunch, dinner, or snack).
 */
export const countWeeklyDateWithFoods = (
  weeklyMealRecords: WeeklyMealRecordsState['weeklyMealRecords']
) => {
  const weeklyMealRecordsWithFoods = weeklyMealRecords.filter(
    (category: any) => category.foods.length > 0
  )

  const breakfastCount = weeklyMealRecordsWithFoods.filter(
    (mealRecord: any) => mealRecord.category === MealCategoryName.BREAKFAST
  ).length

  const lunchCount = weeklyMealRecordsWithFoods.filter(
    (mealRecord: any) => mealRecord.category === MealCategoryName.LUNCH
  ).length

  const dinnerCount = weeklyMealRecordsWithFoods.filter(
    (mealRecord: any) => mealRecord.category === MealCategoryName.DINNER
  ).length

  const snackCount = weeklyMealRecordsWithFoods.filter(
    (mealRecord: any) => mealRecord.category === MealCategoryName.SNACK
  ).length

  const maxCount =
    Math.max(breakfastCount, lunchCount, dinnerCount, snackCount) || 1

  return maxCount
}

/**
 * Calculates the average weekly nutrition values from the provided meal records.
 *
 * @param weeklyMealRecords - An array of meal records for the week. Each meal record should contain a list of foods.
 * @param weeklyDateWithFoodsCount - The number of days in the week that have food records.
 * @returns An object containing the average weekly values for calories, protein, fat, and carbohydrates.
 *
 * @example
 * const weeklyMealRecords = [
 *   { foods: [{ calories: 200, protein: 10, fat: 5, carbohydrates: 30 }] },
 *   { foods: [{ calories: 300, protein: 20, fat: 10, carbohydrates: 40 }] }
 * ];
 * const weeklyDateWithFoodsCount = 2;
 * const avgValues = createAvgWeekNutritionValues(weeklyMealRecords, weeklyDateWithFoodsCount);
 * console.log(avgValues);
 * // Output:
 * // {
 * //   avgWeeklyCalories: 250,
 * //   avgWeeklyProtein: 15,
 * //   avgWeeklyFat: 7.5,
 * //   avgWeeklyCarbohydrates: 35
 * // }
 */
export const createAvgWeekNutritionValues = (
  weeklyMealRecords: WeeklyMealRecordsState['weeklyMealRecords'],
  weeklyDateWithFoodsCount: number
) => {
  const weeklyFoods = weeklyMealRecords.flatMap(
    (mealRecord) => mealRecord.foods
  )

  const weeklyCalories = sum(weeklyFoods, (food: any) => food?.calories || 0)
  const weeklyProtein = sum(weeklyFoods, (food: any) => food?.protein || 0)
  const weeklyFat = sum(weeklyFoods, (food: any) => food?.fat || 0)
  const weeklyCarbohydrates = sum(
    weeklyFoods,
    (food: any) => food?.carbohydrates || 0
  )

  const avgWeeklyCalories = weeklyCalories / weeklyDateWithFoodsCount
  const avgWeeklyProtein = weeklyProtein / weeklyDateWithFoodsCount
  const avgWeeklyFat = weeklyFat / weeklyDateWithFoodsCount
  const avgWeeklyCarbohydrates = weeklyCarbohydrates / weeklyDateWithFoodsCount

  return {
    avgWeeklyCalories: roundToTwoDecimalPlaces(avgWeeklyCalories),
    avgWeeklyProtein: roundToTwoDecimalPlaces(avgWeeklyProtein),
    avgWeeklyFat: roundToTwoDecimalPlaces(avgWeeklyFat),
    avgWeeklyCarbohydrates: roundToTwoDecimalPlaces(avgWeeklyCarbohydrates),
  }
}

/**
 * Asynchronously loads weekly meal records between two dates.
 *
 * This function manages the loading state while fetching meal records data.
 * It sets the loading state to true before fetching data and sets it back
 * to false when the operation completes (regardless of success or failure).
 *
 * @param currentDateString - String representation of the current date
 * @param prevWeekDateString - String representation of the date from previous week
 * @param setWeeklyMealRecords - State setter function to update the weekly meal records
 * @param setIsDataLoading - State setter function to update the loading indicator
 *
 * @returns A promise that resolves when the operation completes
 */
export const loadWeeklyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string,
  setWeeklyMealRecords: WeeklyMealRecordsState['setWeeklyMealRecords'],
  setIsDataLoading: LoadingState['setIsDataLoading']
) => {
  setIsDataLoading(true)
  try {
    const mealRecordsWithFoods = await fetchWeeklyMealRecords(
      currentDateString,
      prevWeekDateString
    )
    setWeeklyMealRecords(mealRecordsWithFoods as MealRecord[])
  } finally {
    setIsDataLoading(false)
  }
}

/**
 * Counts the number of days with food records from DailyMealRecord array.
 *
 * @param weeklyDailyMealRecords - An array of DailyMealRecord for the week.
 * @returns The count of days that have at least one food item in any meal category.
 */
export const countWeeklyDateWithFoodsFromDailyMealRecords = (
  weeklyDailyMealRecords: WeeklyDailyMealRecordsState['weeklyDailyMealRecords']
) => {
  const daysWithFoods = weeklyDailyMealRecords.filter((record) => {
    const hasBreakfast = record.breakfast && record.breakfast.length > 0
    const hasLunch = record.lunch && record.lunch.length > 0
    const hasDinner = record.dinner && record.dinner.length > 0
    const hasSnack = record.snack && record.snack.length > 0

    return hasBreakfast || hasLunch || hasDinner || hasSnack
  })

  return daysWithFoods.length || 1
}

/**
 * Calculates the average weekly nutrition values from DailyMealRecord array.
 *
 * @param weeklyDailyMealRecords - An array of DailyMealRecord for the week.
 * @param weeklyDateWithFoodsCount - The number of days in the week that have food records.
 * @returns An object containing the average weekly values for calories, protein, fat, and carbohydrates.
 */
export const createAvgWeekNutritionValuesFromDailyMealRecords = (
  weeklyDailyMealRecords: WeeklyDailyMealRecordsState['weeklyDailyMealRecords'],
  weeklyDateWithFoodsCount: number
) => {
  const allFoods = weeklyDailyMealRecords.flatMap((record) => [
    ...(record.breakfast || []),
    ...(record.lunch || []),
    ...(record.dinner || []),
    ...(record.snack || []),
  ])

  const weeklyCalories = sum(allFoods, (food: any) => food?.calories || 0)
  const weeklyProtein = sum(allFoods, (food: any) => food?.protein || 0)
  const weeklyFat = sum(allFoods, (food: any) => food?.fat || 0)
  const weeklyCarbohydrates = sum(
    allFoods,
    (food: any) => food?.carbohydrates || 0
  )

  const avgWeeklyCalories = weeklyCalories / weeklyDateWithFoodsCount
  const avgWeeklyProtein = weeklyProtein / weeklyDateWithFoodsCount
  const avgWeeklyFat = weeklyFat / weeklyDateWithFoodsCount
  const avgWeeklyCarbohydrates = weeklyCarbohydrates / weeklyDateWithFoodsCount

  return {
    avgWeeklyCalories: roundToTwoDecimalPlaces(avgWeeklyCalories),
    avgWeeklyProtein: roundToTwoDecimalPlaces(avgWeeklyProtein),
    avgWeeklyFat: roundToTwoDecimalPlaces(avgWeeklyFat),
    avgWeeklyCarbohydrates: roundToTwoDecimalPlaces(avgWeeklyCarbohydrates),
  }
}

/**
 * Asynchronously loads weekly DailyMealRecord between two dates.
 *
 * This function manages the loading state while fetching DailyMealRecord data.
 * It sets the loading state to true before fetching data and sets it back
 * to false when the operation completes (regardless of success or failure).
 *
 * @param currentDateString - String representation of the current date
 * @param prevWeekDateString - String representation of the date from previous week
 * @param setWeeklyDailyMealRecords - State setter function to update the weekly daily meal records
 * @param setIsDataLoading - State setter function to update the loading indicator
 *
 * @returns A promise that resolves when the operation completes
 */
export const loadWeeklyDailyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string,
  setWeeklyDailyMealRecords: WeeklyDailyMealRecordsState['setWeeklyDailyMealRecords'],
  setIsDataLoading: LoadingState['setIsDataLoading']
) => {
  setIsDataLoading(true)
  try {
    const dailyMealRecords = await fetchWeeklyDailyMealRecords(
      currentDateString,
      prevWeekDateString
    )
    setWeeklyDailyMealRecords(dailyMealRecords)
  } finally {
    setIsDataLoading(false)
  }
}

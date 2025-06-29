import { sum } from 'radash'

import { FoodItem } from '../../API'
import { fetchWeeklyDailyMealRecords } from '../../api/daily-meal-record'
import {
  CurrentDateState,
  LoadingState,
  WeeklyDailyMealRecordsState,
} from '../../stores'
import {
  createPrevWeekDate,
  createStringFromDate,
  roundToTwoDecimalPlaces,
} from '../../utils'
import { extractFoodsFromDailyRecord } from '../weekly-calories-chart/utils'

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
    // Check if any meal category has food items
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
  // Extract all food items from the daily meal record
  const allFoods = weeklyDailyMealRecords
    .map((dailyMealRecord) => extractFoodsFromDailyRecord(dailyMealRecord))
    .flat()

  const weeklyCalories = sum(allFoods, (food: FoodItem) => food?.calories || 0)
  const weeklyProtein = sum(allFoods, (food: FoodItem) => food?.protein || 0)
  const weeklyFat = sum(allFoods, (food: FoodItem) => food?.fat || 0)
  const weeklyCarbohydrates = sum(
    allFoods,
    (food: FoodItem) => food?.carbohydrates || 0
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

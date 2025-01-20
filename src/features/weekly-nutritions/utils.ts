import { sum } from 'radash'

import { MealCategoryName, MealRecord } from '@/API'

import { fetchWeeklyMealRecords } from '../../api/meal-record'
import { CurrentDateState, WeeklyMealRecordsState } from '../../stores'
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
 * Fetches weekly meal records for the given date range and updates the state with the fetched records.
 *
 * @param currentDateString - The current date as a string in the format 'YYYY-MM-DD'.
 * @param prevWeekDateString - The date string representing the start of the previous week in the format 'YYYY-MM-DD'.
 * @param setWeeklyMealRecords - A function to update the state with the fetched meal records.
 *
 * @returns A promise that resolves when the meal records have been fetched and the state has been updated.
 */
export const fetchAndSetWeeklyMealRecords = async (
  currentDateString: string,
  prevWeekDateString: string,
  setWeeklyMealRecords: WeeklyMealRecordsState['setWeeklyMealRecords']
) => {
  const mealRecordsWithFoods = await fetchWeeklyMealRecords(
    currentDateString,
    prevWeekDateString
  )

  setWeeklyMealRecords(mealRecordsWithFoods as MealRecord[])
}

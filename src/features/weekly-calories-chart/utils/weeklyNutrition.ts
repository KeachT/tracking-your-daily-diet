import { max, sum } from 'radashi'

import { DailyMealRecord, FoodItem } from '../../../API'
import { CurrentDateState, WeeklyDailyMealRecordsState } from '../../../stores'
import {
  createPrevWeekDate,
  createStringFromDate,
  roundToTwoDecimalPlaces,
} from '../../../utils'
import { WeeklyNutritionsData } from '../types'

/**
 * Generates an array of weekly nutrition data based on the provided DailyMealRecord and current date.
 *
 * @param weeklyDailyMealRecords - An array of DailyMealRecord for the week.
 * @param currentDate - The current date used to generate the week day strings.
 * @returns An array of objects representing the nutrition data for each day of the week.
 *
 * Each object in the returned array contains the following properties:
 * - `name`: A string representing the month and day (formatted as MM/DD).
 * - `calories`: The total number of calories consumed on that day.
 * - `protein`: The total amount of protein consumed on that day.
 * - `fat`: The total amount of fat consumed on that day.
 * - `carbohydrates`: The total amount of carbohydrates consumed on that day.
 */
export const createWeeklyNutritionsDataFromDailyMealRecords = (
  weeklyDailyMealRecords: WeeklyDailyMealRecordsState['weeklyDailyMealRecords'],
  currentDate: CurrentDateState['currentDate'],
): WeeklyNutritionsData[] => {
  const weekDayStrings = createWeekDayStrings(currentDate)

  const weeklyNutritionsData = weekDayStrings.map((dayString: string) => {
    const [_year, month, day] = dayString.split('-')
    const dailyMealRecord = weeklyDailyMealRecords.find(
      (record) => record.date === dayString,
    )
    const dailyFoods = dailyMealRecord
      ? extractFoodsFromDailyRecord(dailyMealRecord)
      : []
    const dailyCalories = sum(
      dailyFoods,
      (food: FoodItem) => food?.calories || 0,
    )
    const dailyProtein = sum(dailyFoods, (food: FoodItem) => food?.protein || 0)
    const dailyFat = sum(dailyFoods, (food: FoodItem) => food?.fat || 0)
    const dailyCarbohydrates = sum(
      dailyFoods,
      (food: FoodItem) => food?.carbohydrates || 0,
    )
    return {
      name: `${month}/${day}`,
      calories: roundToTwoDecimalPlaces(dailyCalories),
      protein: roundToTwoDecimalPlaces(dailyProtein),
      fat: roundToTwoDecimalPlaces(dailyFat),
      carbohydrates: roundToTwoDecimalPlaces(dailyCarbohydrates),
    }
  })

  return weeklyNutritionsData
}

/**
 * Extracts all food items from a daily meal record.
 *
 * @param mealRecord - The daily meal record containing breakfast, lunch, dinner, and snack.
 * @returns An array of all food items from the meal record.
 */
export const extractFoodsFromDailyRecord = (
  dailyMealRecord: DailyMealRecord,
): FoodItem[] => {
  const allMeals = [
    ...(dailyMealRecord.breakfast || []),
    ...(dailyMealRecord.lunch || []),
    ...(dailyMealRecord.dinner || []),
    ...(dailyMealRecord.snack || []),
  ]
  return allMeals.filter((food): food is FoodItem => food !== null)
}

/**
 * Generates an array of weekday strings for the week.
 *
 * @param currentDate The current date. If omitted, the current time will be used.
 * @returns An array of weekday strings for the week.
 */
const createWeekDayStrings = (currentDate: CurrentDateState['currentDate']) => {
  const prevWeekDate = createPrevWeekDate(currentDate)
  const weekDayStrings: string[] = []
  for (let i = 0; i < 7; i++) {
    const dateString = createStringFromDate(prevWeekDate)
    weekDayStrings.push(dateString)
    prevWeekDate.setDate(prevWeekDate.getDate() + 1)
  }
  return weekDayStrings
}

/**
 * Gets the maximum calories from an array of weekly nutrition data.
 *
 * @param weeklyNutritionsData - An array of weekly nutrition data objects.
 * @returns The maximum number of calories found in the weekly nutrition data, or 0 if the array is empty.
 */
export const getMaxCalories = (
  weeklyNutritionsData: WeeklyNutritionsData[],
): number => {
  const maxCalories =
    max(weeklyNutritionsData, (data: WeeklyNutritionsData) => data.calories)
      ?.calories || 0
  return maxCalories
}

/**
 * Determines the y-axis limit for the calories chart.
 * The y-axis limit is calculated as the maximum value between `maxCalories` and `dailyGoalCalories`,
 * with an additional 10% margin (falls back to `100` when both are `0`).
 *
 * @param maxCalories - The maximum calories value.
 * @param dailyGoalCalories - The daily goal calories value.
 * @returns The y-axis limit for the calories chart.
 */
export const determineYLimit = (
  maxCalories: number,
  dailyGoalCalories: number,
) => {
  const baseValue = Math.max(0, maxCalories, dailyGoalCalories)
  if (baseValue === 0) return 100
  return baseValue + baseValue * 0.1
}

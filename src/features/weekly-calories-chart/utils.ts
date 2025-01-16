import { max, sum } from 'radash'

import { CurrentDateState, WeeklyMealRecordsState } from '../../stores'
import {
  createPrevWeekDate,
  createStringFromDate,
  roundToTwoDecimalPlaces,
} from '../../utils'
import { WeeklyNutritionsData } from './types'

/**
 * Generates an array of weekly nutrition data based on the provided meal records and current date.
 *
 * @param weeklyMealRecords - An array of meal records for the week.
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
export const createWeeklyNutritionsData = (
  weeklyMealRecords: WeeklyMealRecordsState['weeklyMealRecords'],
  currentDate: CurrentDateState['currentDate']
): WeeklyNutritionsData[] => {
  const weekDayStrings = createWeekDayStrings(currentDate)

  const weeklyNutritionsData = weekDayStrings.map((dayString: string) => {
    const mealRecords = weeklyMealRecords.filter(
      (mealRecord) => mealRecord.date === dayString
    )

    const [_year, month, day] = dayString.split('-')

    const dailyFoods = mealRecords?.flatMap((mealRecord) => mealRecord.foods)
    const dailyCalories = sum(dailyFoods, (food: any) => food?.calories || 0)
    const dailyProtein = sum(dailyFoods, (food: any) => food?.protein || 0)
    const dailyFat = sum(dailyFoods, (food: any) => food?.fat || 0)
    const dailyCarbohydrates = sum(
      dailyFoods,
      (food: any) => food?.carbohydrates || 0
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
 * Generates an array of weekday strings for the week.
 *
 * @param currentDate The current date. If omitted, the current time will be used.
 * @returns An array of weekday strings for the week.
 */
const createWeekDayStrings = (currentDate: CurrentDateState['currentDate']) => {
  const prevWeekDate = createPrevWeekDate(currentDate)
  const weekDayStrings = []

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
  weeklyNutritionsData: WeeklyNutritionsData[]
): number => {
  const maxCalories =
    max(weeklyNutritionsData, (data: WeeklyNutritionsData) => data.calories)
      ?.calories || 0

  return maxCalories
}

/**
 * Determines the y-axis limit for the calories chart.
 * The y-axis limit is calculated as the maximum value between `maxCalories` and `dailyGoalCalories`,
 * with an additional 10% margin.
 *
 * @param maxCalories - The maximum calories value.
 * @param dailyGoalCalories - The daily goal calories value.
 * @returns The y-axis limit for the calories chart.
 */
export const determineYLimit = (
  maxCalories: number,
  dailyGoalCalories: number
) => {
  const maxValue =
    maxCalories > dailyGoalCalories ? maxCalories : dailyGoalCalories
  const yLimit = maxValue + maxValue * 0.1

  return yLimit
}

/**
 * Generates an array of ticks for the y-axis of a calories chart.
 *
 * @param maxCalories - The maximum number of calories.
 * @param dailyGoalCalories - The daily goal number of calories.
 * @returns An array of ticks for the y-axis, sorted in ascending order.
 */
export const generateYAxisTicks = (
  maxCalories: number,
  dailyGoalCalories: number
) => {
  const ticks = [maxCalories, dailyGoalCalories]
  const sortedTicks = [...ticks].sort((a, b) => a - b)

  return sortedTicks
}

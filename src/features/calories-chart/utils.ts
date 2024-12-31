import { max, sum } from 'radash'

import { CurrentDateState } from '../../stores/currentDate'
import { WeeklyMealRecordsState } from '../../stores/weeklyMealRecords'
import { createPrevWeekDate, createStringFromDate } from '../../utils'
import { WeeklyCaloriesData } from './types'

/**
 * Creates an array of weekly calories data based on meal records and the current date.
 *
 * @param weeklyMealRecords - An array of meal records for the week.
 * @param currentDate - The current date.
 * @returns An array of objects representing the calories consumed each day of the week.
 *
 * Each object in the returned array contains:
 * - `name`: A string representing the month and day (formatted as MM/DD).
 * - `calories`: The total number of calories consumed on that day.
 */
export const createWeeklyCaloriesData = (
  weeklyMealRecords: WeeklyMealRecordsState['weeklyMealRecords'],
  currentDate: CurrentDateState['currentDate']
): WeeklyCaloriesData[] => {
  const weekDayStrings = createWeekDayStrings(currentDate)

  const weeklyCaloriesData = weekDayStrings.map((dayString: string) => {
    const mealRecords = weeklyMealRecords.filter(
      (mealRecord) => mealRecord.date === dayString
    )

    const dailyFoods = mealRecords?.flatMap((mealRecord) => mealRecord.foods)
    const dailyCalories = sum(dailyFoods, (food: any) => food?.calories || 0)

    const [_year, month, day] = dayString.split('-')

    return {
      name: `${month}/${day}`,
      calories: dailyCalories,
    }
  })

  return weeklyCaloriesData
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
 * Calculates the maximum number of calories from the given weekly calories data.
 *
 * @param weeklyCaloriesData - The array of weekly calories data.
 * @returns The maximum number of calories.
 */
export const getMaxCalories = (
  weeklyCaloriesData: WeeklyCaloriesData[]
): number => {
  const maxCalories =
    max(weeklyCaloriesData, (data: any) => data.calories)?.calories || 0

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
  const ticks = [maxCalories, dailyGoalCalories, dailyGoalCalories / 2]
  const sortedTicks = [...ticks].sort((a, b) => a - b)

  return sortedTicks
}

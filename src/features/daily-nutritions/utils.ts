import { DateValue } from '@mantine/dates'
import { sum } from 'radash'

/**
 * Generates the current date and the date of the previous week.
 *
 * @param {DateValue} currentDate - The value representing the current date.
 * @returns {{ currentDateString: string, prevWeekDateString: string }} An object containing date strings.
 */
export const createWeekDateString = (currentDate: DateValue) => {
  const currentDateString = currentDate?.toISOString()?.split('T')?.[0] || ''

  const nowDate = new Date()
  const prevWeekDate = new Date()
  prevWeekDate.setDate((currentDate || nowDate).getDate() - 6)

  const prevWeekDateString = prevWeekDate?.toISOString()?.split('T')?.[0] || ''

  return { currentDateString, prevWeekDateString }
}

/**
 * Function that calculates the average week nutritions and returns them as an object.
 *
 * @param {any} weeklyMealCategories - Object containing weekly meal categories
 * @returns {Object} - Object containing the average values
 */
export const createAvgWeekNutritionValues = (weeklyMealCategories: any) => {
  const weeklyFoods = weeklyMealCategories.flatMap(
    (category: any) => category.foods.items
  )

  const weeklyCalories = sum(weeklyFoods, (food: any) => food?.calories || 0)
  const weeklyProtein = sum(weeklyFoods, (food: any) => food?.protein || 0)
  const weeklyFat = sum(weeklyFoods, (food: any) => food?.fat || 0)
  const weeklyCarbohydrates = sum(
    weeklyFoods,
    (food: any) => food?.carbohydrates || 0
  )

  const avgWeeklyCalories = Math.round(weeklyCalories / 7)
  const avgWeeklyProtein = Math.round(weeklyProtein / 7)
  const avgWeeklyFat = Math.round(weeklyFat / 7)
  const avgWeeklyCarbohydrates = Math.round(weeklyCarbohydrates / 7)
  return {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  }
}

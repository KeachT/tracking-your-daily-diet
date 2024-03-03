import { sum } from 'radash'

import { MealCategoryName } from '@/API'

import { CurrentDateState } from '../../stores/currentDate'
import { createPrevWeekDate } from '../../utils/createPrevWeekDate'
import { createStringFromDate } from '../../utils/createStringFromDate'

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
 * Function that returns the number of items in the meal category with the most items from the given list of meal categories.
 * @param weeklyMealCategories List of meal categories
 * @returns The number of items in the meal category with the most items
 */
export const countWeeklyDateWithFoods = (weeklyMealCategories: any) => {
  const weeklyMealCategoriesWithFoods = weeklyMealCategories.filter(
    (category: any) => category.foods.items.length > 0
  )

  const breakfastCount = weeklyMealCategoriesWithFoods.filter(
    (category: any) => category.name === MealCategoryName.BREAKFAST
  ).length
  const lunchCount = weeklyMealCategoriesWithFoods.filter(
    (category: any) => category.name === MealCategoryName.LUNCH
  ).length
  const dinnerCount = weeklyMealCategoriesWithFoods.filter(
    (category: any) => category.name === MealCategoryName.DINNER
  ).length
  const snackCount = weeklyMealCategoriesWithFoods.filter(
    (category: any) => category.name === MealCategoryName.SNACK
  ).length

  const maxCount =
    Math.max(breakfastCount, lunchCount, dinnerCount, snackCount) || 1

  return maxCount
}

/**
 * Function that calculates the average week nutritions and returns them as an object.
 *
 * @param {any} weeklyMealCategories - Object containing weekly meal categories
 * @returns {Object} - Object containing the average values
 */
export const createAvgWeekNutritionValues = (
  weeklyMealCategories: any,
  weeklyDateWithFoodsCount: number
) => {
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

  const avgWeeklyCalories =
    Math.round((weeklyCalories / weeklyDateWithFoodsCount) * 100) / 100
  const avgWeeklyProtein =
    Math.round((weeklyProtein / weeklyDateWithFoodsCount) * 100) / 100
  const avgWeeklyFat =
    Math.round((weeklyFat / weeklyDateWithFoodsCount) * 100) / 100
  const avgWeeklyCarbohydrates =
    Math.round((weeklyCarbohydrates / weeklyDateWithFoodsCount) * 100) / 100

  return {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  }
}

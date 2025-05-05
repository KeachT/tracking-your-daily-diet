import { sum } from 'radash'

import { FoodItem, UserMealPreset } from '@/API'

/**
 * Extracts all food items from a user meal preset and combines them into a single array.
 * Collects foods from breakfast, lunch, dinner, and snack categories.
 *
 * @param userMealPreset - The user meal preset containing food items in different meal categories
 * @returns An array of food items from all meal categories, or an empty array if the preset is null
 */
export const extractAllFoodsFromPreset = (
  userMealPreset: UserMealPreset | null
) => {
  if (!userMealPreset) {
    return []
  }

  const allFoods = [
    ...(userMealPreset.breakfast || []),
    ...(userMealPreset.lunch || []),
    ...(userMealPreset.dinner || []),
    ...(userMealPreset.snack || []),
  ].filter(Boolean) as FoodItem[]

  return allFoods
}

/**
 * Calculates the total nutrition values from an array of food items.
 *
 * @param foods - An array of FoodItem objects containing nutrition information
 * @returns An object containing the total calories, protein, fat, and carbohydrates
 *          summed across all provided food items
 *
 * @example
 * const foods = [
 *   { name: 'Apple', calories: 95, protein: 0.5, fat: 0.3, carbohydrates: 25 },
 *   { name: 'Chicken', calories: 165, protein: 31, fat: 3.6, carbohydrates: 0 }
 * ];
 * const totals = calculatePresetNutritionValues(foods);
 * // Returns { totalCalories: 260, totalProtein: 31.5, totalFat: 3.9, totalCarbohydrates: 25 }
 */
export const calculatePresetNutritionValues = (foods: FoodItem[]) => {
  const totalCalories = sum(foods, (food) => food?.calories || 0)
  const totalProtein = sum(foods, (food) => food?.protein || 0)
  const totalFat = sum(foods, (food) => food?.fat || 0)
  const totalCarbohydrates = sum(foods, (food) => food?.carbohydrates || 0)

  return {
    totalCalories,
    totalProtein,
    totalFat,
    totalCarbohydrates,
  }
}

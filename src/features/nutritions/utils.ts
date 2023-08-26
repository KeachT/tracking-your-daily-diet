import { Nutrition } from './types'

/**
 * Calculates the percentage of progress based on daily intake and a goal.
 *
 * @param dailyIntake - The value of daily intake (number)
 * @param targetGoal - The value of the goal (number)
 * @returns Returns the percentage of progress as an integer (number).
 */
const calcDailyPercent = (dailyIntake: number, targetGoal: number) =>
  Math.round((dailyIntake / (targetGoal ?? 1)) * 100)

/**
 * Creates an array of Nutrition objects based on daily values and goals.
 *
 * @param dailyCalories - The value of daily calories (number)
 * @param dailyProtein - The value of daily protein (number)
 * @param dailyFat - The value of daily fat (number)
 * @param dailyCarbohydrates - The value of daily carbohydrates (number)
 * @param dailyGoalCalories - The value of the goal for calories (number)
 * @param dailyGoalProtein - The value of the goal for protein (number)
 * @param dailyGoalFat - The value of the goal for fat (number)
 * @param dailyGoalCarbohydrates - The value of the goal for carbohydrates (number)
 * @returns Returns an array of Nutrition objects.
 */
export const createNutritions = (
  dailyCalories: number,
  dailyProtein: number,
  dailyFat: number,
  dailyCarbohydrates: number,
  dailyGoalCalories: number,
  dailyGoalProtein: number,
  dailyGoalFat: number,
  dailyGoalCarbohydrates: number
): Nutrition[] => [
  {
    name: 'Calories',
    color: 'violet',
    number: dailyCalories,
    percent: calcDailyPercent(dailyCalories, dailyGoalCalories),
  },
  {
    name: 'Protein',
    color: 'red',
    number: dailyProtein,
    percent: calcDailyPercent(dailyProtein, dailyGoalProtein),
  },
  {
    name: 'Fat',
    color: 'yellow',
    number: dailyFat,
    percent: calcDailyPercent(dailyFat, dailyGoalFat),
  },
  {
    name: `Carbonhydrates`,
    color: 'teal',
    number: dailyCarbohydrates,
    percent: calcDailyPercent(dailyCarbohydrates, dailyGoalCarbohydrates),
  },
]

import { sum } from 'radash'

import { CurrentDateState } from '../../stores/currentDate'
import { WeeklyMealDatesState } from '../../stores/weeklyMealDates'

/**
 * Creates weekly calorie data for chart.
 *
 * @param weeklyMealDates Weekly meal date data.
 * @param currentDate Current date.
 * @returns Array of weekly calorie data for chart.
 */
export const createWeeklyCaloriesData = (
  weeklyMealDates: WeeklyMealDatesState['weeklyMealDates'],
  currentDate: CurrentDateState['currentDate']
) => {
  const weekDayStrings = createWeekDayStrings(currentDate)

  const weeklyCaloriesData = weekDayStrings.map((dayString: string) => {
    const mealDate = weeklyMealDates.find(
      (mealDate: any) => mealDate.date === dayString
    )

    const dailyFoods = mealDate?.mealCategories?.items?.flatMap(
      (category: any) => category.foods.items
    )

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
  const weekDayStrings = []

  const nowDate = new Date()
  const prevWeekDate = new Date()
  prevWeekDate.setDate((currentDate || nowDate).getDate() - 6)

  for (let i = 0; i < 7; i++) {
    const dateString = prevWeekDate.toISOString().split('T')[0]
    weekDayStrings.push(dateString)
    prevWeekDate.setDate(prevWeekDate.getDate() + 1)
  }

  return weekDayStrings
}

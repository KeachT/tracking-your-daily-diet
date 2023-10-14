import { useEffect } from 'react'

import { Nutritions } from '../../../features/nutritions'
import { useCurrentDateStore } from '../../../stores/currentDate'
import { useWeeklyMealCategoriesStore } from '../../../stores/weeklyMealCategories'
import { fetchWeeklyMealCategories } from '../api/fetchWeeklyMealCategories'
import { createAvgWeekNutritionValues, createWeekDateString } from '../utils'

export function WeeklyNutritions() {
  const { currentDate } = useCurrentDateStore()

  const { weeklyMealCategories, setWeeklyMealCategories } =
    useWeeklyMealCategoriesStore()

  const { currentDateString, prevWeekDateString } =
    createWeekDateString(currentDate)

  const {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  } = createAvgWeekNutritionValues(weeklyMealCategories)

  useEffect(() => {
    fetchWeeklyMealCategories(
      currentDateString,
      prevWeekDateString,
      setWeeklyMealCategories
    )
  }, [currentDateString, prevWeekDateString, setWeeklyMealCategories])

  return (
    <Nutritions
      dailyCalories={avgWeeklyCalories}
      dailyProtein={avgWeeklyProtein}
      dailyFat={avgWeeklyFat}
      dailyCarbohydrates={avgWeeklyCarbohydrates}
    />
  )
}

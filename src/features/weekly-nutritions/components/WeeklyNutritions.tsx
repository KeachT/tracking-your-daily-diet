import { useEffect } from 'react'

import { Nutritions } from '../../../features/nutritions'
import { useCurrentDateStore } from '../../../stores/currentDate'
import { useWeeklyMealCategoriesStore } from '../../../stores/weeklyMealCategories'
import { useWeeklyMealDates } from '../../../stores/weeklyMealDates'
import { fetchWeeklyMealCategories } from '../api/fetchWeeklyMealCategories'
import {
  countWeeklyDateWithFoods,
  createAvgWeekNutritionValues,
  createWeekDateString,
} from '../utils'

export function WeeklyNutritions() {
  const { currentDate } = useCurrentDateStore()
  const { setWeeklyMealDates } = useWeeklyMealDates()
  const { weeklyMealCategories, setWeeklyMealCategories } =
    useWeeklyMealCategoriesStore()

  const { currentDateString, prevWeekDateString } =
    createWeekDateString(currentDate)
  const weeklyDateWithFoodsCount =
    countWeeklyDateWithFoods(weeklyMealCategories)
  const {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  } = createAvgWeekNutritionValues(
    weeklyMealCategories,
    weeklyDateWithFoodsCount
  )

  useEffect(() => {
    fetchWeeklyMealCategories(
      currentDateString,
      prevWeekDateString,
      setWeeklyMealCategories,
      setWeeklyMealDates
    )
  }, [
    currentDateString,
    prevWeekDateString,
    setWeeklyMealCategories,
    setWeeklyMealDates,
  ])

  return (
    <Nutritions
      dailyCalories={avgWeeklyCalories}
      dailyProtein={avgWeeklyProtein}
      dailyFat={avgWeeklyFat}
      dailyCarbohydrates={avgWeeklyCarbohydrates}
    />
  )
}

import { useEffect } from 'react'

import { Nutritions } from '../../../features/nutritions'
import { useCurrentDateStore } from '../../../stores/currentDate'
import { useWeeklyMealRecordsStore } from '../../../stores/weeklyMealRecords'
import { fetchWeeklyMealRecords } from '../api/fetchWeeklyMealRecords'
import {
  countWeeklyDateWithFoods,
  createAvgWeekNutritionValues,
  createWeekDateString,
} from '../utils'

export function WeeklyNutritions() {
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealRecords, setWeeklyMealRecords } =
    useWeeklyMealRecordsStore()

  const { currentDateString, prevWeekDateString } =
    createWeekDateString(currentDate)

  const weeklyDateWithFoodsCount = countWeeklyDateWithFoods(weeklyMealRecords)

  const {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  } = createAvgWeekNutritionValues(weeklyMealRecords, weeklyDateWithFoodsCount)

  useEffect(() => {
    fetchWeeklyMealRecords(
      currentDateString,
      prevWeekDateString,
      setWeeklyMealRecords
    )
  }, [currentDateString, prevWeekDateString, setWeeklyMealRecords])

  return (
    <Nutritions
      dailyCalories={avgWeeklyCalories}
      dailyProtein={avgWeeklyProtein}
      dailyFat={avgWeeklyFat}
      dailyCarbohydrates={avgWeeklyCarbohydrates}
    />
  )
}

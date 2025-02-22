import { useEffect } from 'react'

import { Nutritions } from '../../../features/nutritions'
import { useCurrentDateStore, useWeeklyMealRecordsStore } from '../../../stores'
import {
  countWeeklyDateWithFoods,
  createAvgWeekNutritionValues,
  createWeekDateString,
  fetchAndSetWeeklyMealRecords,
} from '../utils'

export function WeeklyNutritions() {
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealRecords, setWeeklyMealRecords } =
    useWeeklyMealRecordsStore()

  const weeklyDateWithFoodsCount = countWeeklyDateWithFoods(weeklyMealRecords)
  const {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  } = createAvgWeekNutritionValues(weeklyMealRecords, weeklyDateWithFoodsCount)
  const { currentDateString, prevWeekDateString } =
    createWeekDateString(currentDate)

  useEffect(() => {
    fetchAndSetWeeklyMealRecords(
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

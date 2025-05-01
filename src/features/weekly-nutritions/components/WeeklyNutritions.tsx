import { useEffect, useState } from 'react'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { Nutritions } from '../../../features/nutritions'
import { useCurrentDateStore, useWeeklyMealRecordsStore } from '../../../stores'
import {
  countWeeklyDateWithFoods,
  createAvgWeekNutritionValues,
  createWeekDateString,
  loadWeeklyMealRecords,
} from '../utils'

export function WeeklyNutritions() {
  const [isLoading, setIsLoading] = useState(true)
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
    loadWeeklyMealRecords(
      currentDateString,
      prevWeekDateString,
      setWeeklyMealRecords,
      setIsLoading
    )
  }, [currentDateString, prevWeekDateString, setWeeklyMealRecords])

  return isLoading ? (
    <LoadingSkeleton height={200} />
  ) : (
    <Nutritions
      dailyCalories={avgWeeklyCalories}
      dailyProtein={avgWeeklyProtein}
      dailyFat={avgWeeklyFat}
      dailyCarbohydrates={avgWeeklyCarbohydrates}
    />
  )
}

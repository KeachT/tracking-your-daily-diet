import { useEffect } from 'react'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { Nutritions } from '../../../features/nutritions'
import {
  useCurrentDateStore,
  useLoadingStateStore,
  useWeeklyMealRecordsStore,
} from '../../../stores'
import {
  countWeeklyDateWithFoods,
  createAvgWeekNutritionValues,
  createWeekDateString,
  loadWeeklyMealRecords,
} from '../utils'

export function WeeklyNutritions() {
  const { currentDate } = useCurrentDateStore()
  const { isDataLoading, setIsDataLoading } = useLoadingStateStore()
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
      setIsDataLoading
    )
  }, [
    currentDateString,
    prevWeekDateString,
    setWeeklyMealRecords,
    setIsDataLoading,
  ])

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <Nutritions
      dailyCalories={avgWeeklyCalories}
      dailyProtein={avgWeeklyProtein}
      dailyFat={avgWeeklyFat}
      dailyCarbohydrates={avgWeeklyCarbohydrates}
    />
  )
}

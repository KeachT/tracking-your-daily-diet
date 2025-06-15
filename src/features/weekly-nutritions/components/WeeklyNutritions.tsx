import { useEffect } from 'react'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NutritionSummary } from '../../../components/NutritionSummary'
import {
  useCurrentDateStore,
  useLoadingStateStore,
  useWeeklyDailyMealRecordsStore,
} from '../../../stores'
import {
  countWeeklyDateWithFoodsFromDailyMealRecords,
  createAvgWeekNutritionValuesFromDailyMealRecords,
  createWeekDateString,
  loadWeeklyDailyMealRecords,
} from '../utils'

export function WeeklyNutritions() {
  const { currentDate } = useCurrentDateStore()
  const { isDataLoading, setIsDataLoading } = useLoadingStateStore()
  const { weeklyDailyMealRecords, setWeeklyDailyMealRecords } =
    useWeeklyDailyMealRecordsStore()

  const { currentDateString, prevWeekDateString } =
    createWeekDateString(currentDate)
  const weeklyDateWithFoodsCount = countWeeklyDateWithFoodsFromDailyMealRecords(
    weeklyDailyMealRecords
  )
  const {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  } = createAvgWeekNutritionValuesFromDailyMealRecords(
    weeklyDailyMealRecords,
    weeklyDateWithFoodsCount
  )

  useEffect(() => {
    // Load weekly daily meal records when the component mounts or when the current date changes
    loadWeeklyDailyMealRecords(
      currentDateString,
      prevWeekDateString,
      setWeeklyDailyMealRecords,
      setIsDataLoading
    )
  }, [
    currentDateString,
    prevWeekDateString,
    setWeeklyDailyMealRecords,
    setIsDataLoading,
  ])

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <NutritionSummary
      calories={avgWeeklyCalories}
      protein={avgWeeklyProtein}
      fat={avgWeeklyFat}
      carbohydrates={avgWeeklyCarbohydrates}
    />
  )
}

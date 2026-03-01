import { Badge, Stack } from '@mantine/core'
import { useEffect } from 'react'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NutritionSummary } from '../../../components/NutritionSummary'
import {
  useCurrentDateStore,
  useDailyGoalStore,
  useLoadingStateStore,
  useWeeklyDailyMealRecordsStore,
} from '../../../stores'
import {
  countWeeklyDateWithFoodsFromDailyMealRecords,
  createAvgWeekNutritionValuesFromDailyMealRecords,
  createWeekDateString,
  createWeeklyNutritionGoals,
  isSaturday,
  isWeeklyNutritionGoalAchieved,
  loadWeeklyDailyMealRecords,
} from '../utils'

export function WeeklyNutritions() {
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const dailyGoal = useDailyGoalStore((state) => state.dailyGoal)
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)
  const setIsDataLoading = useLoadingStateStore(
    (state) => state.setIsDataLoading,
  )
  const weeklyDailyMealRecords = useWeeklyDailyMealRecordsStore(
    (state) => state.weeklyDailyMealRecords,
  )
  const setWeeklyDailyMealRecords = useWeeklyDailyMealRecordsStore(
    (state) => state.setWeeklyDailyMealRecords,
  )

  const { currentDateString, prevWeekDateString } =
    createWeekDateString(currentDate)
  const weeklyDateWithFoodsCount = countWeeklyDateWithFoodsFromDailyMealRecords(
    weeklyDailyMealRecords,
  )
  const {
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
  } = createAvgWeekNutritionValuesFromDailyMealRecords(
    weeklyDailyMealRecords,
    weeklyDateWithFoodsCount,
  )

  const nutritionGoals = createWeeklyNutritionGoals(
    avgWeeklyCalories,
    avgWeeklyProtein,
    avgWeeklyFat,
    avgWeeklyCarbohydrates,
    dailyGoal,
  )
  const isWeeklyGoalAchieved = isWeeklyNutritionGoalAchieved(nutritionGoals)
  const isSaturdayDay = isSaturday(currentDate)

  useEffect(() => {
    // Load weekly daily meal records when the component mounts or when the current date changes
    loadWeeklyDailyMealRecords(
      currentDateString,
      prevWeekDateString,
      setWeeklyDailyMealRecords,
      setIsDataLoading,
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
    <Stack gap="sm">
      {isWeeklyGoalAchieved && isSaturdayDay ? (
        <Badge size="lg" variant="light" color="yellow" w="fit-content">
          🎉 週間の目標達成！
        </Badge>
      ) : null}

      <NutritionSummary
        calories={avgWeeklyCalories}
        protein={avgWeeklyProtein}
        fat={avgWeeklyFat}
        carbohydrates={avgWeeklyCarbohydrates}
      />
    </Stack>
  )
}

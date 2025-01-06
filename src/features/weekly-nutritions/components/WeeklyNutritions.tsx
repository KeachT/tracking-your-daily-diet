import { Box, Text } from '@mantine/core'
import { useEffect } from 'react'

import { Nutritions } from '../../../features/nutritions'
import { useCurrentDateStore, useWeeklyMealRecordsStore } from '../../../stores'
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
    <Box>
      <Text fw={200} size="xl" mb={10}>
        Weekly Nutritions
      </Text>

      <Nutritions
        dailyCalories={avgWeeklyCalories}
        dailyProtein={avgWeeklyProtein}
        dailyFat={avgWeeklyFat}
        dailyCarbohydrates={avgWeeklyCarbohydrates}
      />
    </Box>
  )
}

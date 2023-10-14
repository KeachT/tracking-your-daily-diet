import { Box, Text } from '@mantine/core'
import { useEffect } from 'react'

import { Layout } from '../components/Layout'
import { CaloriesChart } from '../features/calories-chart'
import { DatePickerCard } from '../features/date-picker-card'
import { Nutritions } from '../features/nutritions'
import { useCurrentDateStore } from '../stores/currentDate'
import { useWeeklyMealCategoriesStore } from '../stores/weeklyMealCategories'
import { fetchWeeklyMealCategories } from './api/fetchWeeklyMealCategories'
import {
  createAvgWeekNutritionValues,
  createWeekDateString,
} from './utils/week'

export default function Week() {
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
    <Layout title="Week">
      <Box maw={300} mb={50}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Weelky Nutritions
        </Text>
        <Nutritions
          dailyCalories={avgWeeklyCalories}
          dailyProtein={avgWeeklyProtein}
          dailyFat={avgWeeklyFat}
          dailyCarbohydrates={avgWeeklyCarbohydrates}
        />
      </Box>

      <Text weight={200} size="xl" mb={20}>
        Weelky Calories Chart
      </Text>
      <CaloriesChart />
    </Layout>
  )
}

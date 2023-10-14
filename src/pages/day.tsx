import { Box, Text } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DatePickerCard } from '../features/date-picker-card'
import { MealForm } from '../features/meal-form'
import { Nutritions } from '../features/nutritions'
import { useNutritionNumbersStore } from '../stores/nutritionNumbers'

export default function Day() {
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  return (
    <Layout title="Day">
      <Box maw={300} mb={50}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Daily Nutritions
        </Text>
        <Nutritions
          dailyCalories={dailyCalories}
          dailyProtein={dailyProtein}
          dailyFat={dailyFat}
          dailyCarbohydrates={dailyCarbohydrates}
        />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Daily Meals
        </Text>
        <MealForm />
      </Box>
    </Layout>
  )
}

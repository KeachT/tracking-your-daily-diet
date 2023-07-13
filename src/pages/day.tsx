import { Box, Text } from '@mantine/core'
import { Layout } from '../components/layout/Layout'
import { DatePickerCard } from '../features/datepickercard/DatePickerCard'
import { DailyNutrition } from '../features/dailynutrition/DailyNutrition'
import { MealForm } from '../features/mealform/MealForm'

export default function Day() {
  // const { user } = useAuthenticator()

  return (
    <Layout title="Day">
      <Box maw={300} mb={50}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          DailyNutritions
        </Text>
        <DailyNutrition />
      </Box>

      <Box maw={700} mb={50}>
        <MealForm />
      </Box>
    </Layout>
  )
}

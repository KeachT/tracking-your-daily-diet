import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DailyNutritions } from '../features/daily-nutritions'
import { DatePickerCard } from '../features/date-picker-card'
import { MealForm } from '../features/meal-form'

export default function Day() {
  return (
    <Layout title="Day">
      <Box maw={300} mb={30}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={30}>
        <DailyNutritions />
      </Box>

      <Box maw={700} mb={30}>
        <MealForm />
      </Box>
    </Layout>
  )
}

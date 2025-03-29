import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { MealForm } from '../features/daily-meal-form'
import { DailyNutritions } from '../features/daily-nutritions'
import { DatePickerCard } from '../features/date-picker-card'

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

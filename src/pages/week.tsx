import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DatePickerCard } from '../features/date-picker-card'
import { WeeklyCaloriesChart } from '../features/weekly-calories-chart'
import { WeeklyNutritions } from '../features/weekly-nutritions'

export default function Week() {
  return (
    <Layout title="Week">
      <Box maw={300} mb={30}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={30}>
        <WeeklyNutritions />
      </Box>

      <Box maw={700} mb={30}>
        <WeeklyCaloriesChart />
      </Box>
    </Layout>
  )
}

import { Box, Text } from '@mantine/core'

import { Layout } from '../components/Layout'
import { CaloriesChart } from '../features/calories-chart'
import { DatePickerCard } from '../features/date-picker-card'
import { WeeklyNutritions } from '../features/weekly-nutritions'

export default function Week() {
  return (
    <Layout title="Week">
      <Box maw={300} mb={50}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Weekly Nutritions
        </Text>
        <WeeklyNutritions />
      </Box>

      <Text weight={200} size="xl" mb={20}>
        Weekly Calories Chart
      </Text>
      <CaloriesChart />
    </Layout>
  )
}

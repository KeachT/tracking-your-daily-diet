import { Box, ScrollArea, Text } from '@mantine/core'

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
        <Text fw={200} size="xl" mb={20}>
          Weekly Nutritions
        </Text>
        <WeeklyNutritions />
      </Box>

      <Box maw={700} mb={50}>
        <Text fw={200} size="xl" mb={20}>
          Weekly Calories Chart
        </Text>
        <ScrollArea maw={600} h={500} mb={50}>
          <CaloriesChart />
        </ScrollArea>
      </Box>
    </Layout>
  )
}

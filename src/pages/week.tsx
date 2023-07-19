import { Box, Text } from '@mantine/core'
import { Layout } from '../components/Layout'
import { DatePickerCard } from '../features/date-picker-card'
import { DailyNutrition } from '../features/daily-nutrition'
import { CaloriesChart } from '../features/calories-chart'

export default function Week() {
  return (
    <Layout title="Week">
      <Box maw={300} mb={50}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Weelky Nutritions
        </Text>
        <DailyNutrition />
      </Box>

      <Text weight={200} size="xl" mb={20}>
        Weelky Calories Chart
      </Text>
      <CaloriesChart />
    </Layout>
  )
}

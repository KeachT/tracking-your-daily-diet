import { Box, Text } from '@mantine/core'
import { Layout } from '../components/Layout'
import { DailyGoal } from '../features/daily-goal'

export default function Settings() {
  return (
    <Layout title="Settings">
      <Box maw={700} mb={30}>
        <Text weight={200} size="xl" mb={20}>
          Daily Goal
        </Text>
      </Box>

      <Box maw={400} mb={30}>
        <DailyGoal />
      </Box>
    </Layout>
  )
}

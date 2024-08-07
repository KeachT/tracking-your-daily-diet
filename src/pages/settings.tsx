import { Box, Text } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DailyGoal } from '../features/daily-goal'

export default function Settings() {
  return (
    <Layout title="Settings">
      <Box maw={700} mb={20}>
        <Text fw={200} size="xl">
          Daily Goal
        </Text>
      </Box>

      <Box maw={400} mb={20}>
        <DailyGoal />
      </Box>
    </Layout>
  )
}

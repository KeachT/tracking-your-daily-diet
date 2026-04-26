import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DailyGoal } from '../features/daily-goal'
import { DailyGoalHeader } from '../features/daily-goal-header'

export default function Settings() {
  return (
    <Layout title="目標設定">
      <Box maw={300} mb={30}>
        <DailyGoalHeader />
      </Box>

      <Box maw={400} mb={30}>
        <DailyGoal />
      </Box>
    </Layout>
  )
}

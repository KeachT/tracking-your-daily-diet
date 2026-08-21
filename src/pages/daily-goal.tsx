import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { Robots } from '../constants'
import { DailyGoal } from '../features/daily-goal'
import { DailyGoalHeader } from '../features/daily-goal-header'

export default function DailyGoalPage() {
  return (
    <Layout title="目標" robots={Robots.NoindexNofollow}>
      <Box maw={300} mb={30}>
        <DailyGoalHeader />
      </Box>

      <Box maw={400} mb={30}>
        <DailyGoal />
      </Box>
    </Layout>
  )
}

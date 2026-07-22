import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { Robots } from '../constants'
import { DeleteAllDataButton } from '../features/account-deletion'
import { AccountHeader } from '../features/account-header'
import { DailyGoal } from '../features/daily-goal'
import { DailyGoalHeader } from '../features/daily-goal-header'

export default function Settings() {
  return (
    <Layout title="目標設定" robots={Robots.NoindexNofollow}>
      <Box maw={300} mb={30}>
        <DailyGoalHeader />
      </Box>

      <Box maw={400} mb={50}>
        <DailyGoal />
      </Box>

      <Box maw={300} mb={30}>
        <AccountHeader />
      </Box>

      <Box maw={400} mb={30}>
        <DeleteAllDataButton />
      </Box>
    </Layout>
  )
}

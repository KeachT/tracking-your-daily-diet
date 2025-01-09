import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DailyGoal } from '../features/daily-goal'

export default function Settings() {
  return (
    <Layout title="Settings">
      <Box maw={400} mb={20}>
        <DailyGoal />
      </Box>
    </Layout>
  )
}

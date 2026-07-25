import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { Robots } from '../constants'
import {
  DeleteAllDataButton,
  WithdrawButton,
} from '../features/account-deletion'
import { AccountHeader } from '../features/account-header'

export default function SettingsPage() {
  return (
    <Layout title="設定" robots={Robots.NoindexNofollow}>
      <Box maw={300} mb={30}>
        <AccountHeader />
      </Box>

      <Box maw={400} mb={30}>
        <DeleteAllDataButton />
      </Box>

      <Box maw={400} mb={30}>
        <WithdrawButton />
      </Box>
    </Layout>
  )
}

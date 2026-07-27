import { Alert } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'

export function DailyGoalEmptyNotice() {
  return (
    <Alert
      variant="light"
      color="teal"
      icon={<IconInfoCircle size={16} />}
      title="目標が設定されていません"
      radius="md"
      mb={30}
    />
  )
}

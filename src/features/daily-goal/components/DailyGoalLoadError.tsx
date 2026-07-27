import { Alert, Button, Stack, Text } from '@mantine/core'
import { IconAlertTriangle, IconRefresh } from '@tabler/icons-react'
import { useState } from 'react'

import { loadDailyGoal } from '../../../utils'

export function DailyGoalLoadError() {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      await loadDailyGoal()
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <Alert
      color="red"
      icon={<IconAlertTriangle size={16} />}
      title="目標を読み込めませんでした"
    >
      <Stack align="flex-start">
        <Button
          variant="default"
          leftSection={<IconRefresh size={16} />}
          onClick={handleRetry}
          loading={isRetrying}
        >
          再読み込み
        </Button>
      </Stack>
    </Alert>
  )
}

import { Alert, Button, Stack } from '@mantine/core'
import { IconAlertTriangle, IconRefresh } from '@tabler/icons-react'
import { useState } from 'react'

import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate } from '../../../utils'
import { loadDailyMealRecord } from '../utils'

export function DailyMealFormLoadError() {
  const [isRetrying, setIsRetrying] = useState(false)
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const currentDateString = createStringFromDate(currentDate)

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      await loadDailyMealRecord(currentDateString)
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <Alert
      color="red"
      icon={<IconAlertTriangle size={16} />}
      title="食事記録を読み込めませんでした"
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

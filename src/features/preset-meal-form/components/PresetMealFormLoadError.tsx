import { Alert, Button, Stack } from '@mantine/core'
import { IconAlertTriangle, IconRefresh } from '@tabler/icons-react'
import { useState } from 'react'

import { loadUserMealPreset } from '../../../utils'

export function PresetMealFormLoadError() {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      await loadUserMealPreset()
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <Alert
      color="red"
      icon={<IconAlertTriangle size={16} />}
      title="プリセットを読み込めませんでした"
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

import { Alert } from '@mantine/core'
import { IconRocket } from '@tabler/icons-react'

export function AlertMessage() {
  return (
    <Alert icon={<IconRocket size={20} />} title="開発中" color="teal">
      現在ベータ版として公開中です！
    </Alert>
  )
}

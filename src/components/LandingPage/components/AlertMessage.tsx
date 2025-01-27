import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

export function AlertMessage() {
  return (
    <Alert
      icon={<IconAlertCircle size={20} />}
      title="開発中のお知らせ"
      color="red"
    >
      本アプリケーションは現在開発中です。新機能は順次追加予定です。
    </Alert>
  )
}

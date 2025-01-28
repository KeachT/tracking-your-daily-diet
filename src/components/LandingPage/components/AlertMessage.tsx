import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

export function AlertMessage() {
  return (
    <Alert icon={<IconAlertCircle size={20} />} title="お知らせ" color="red">
      本アプリケーションは現在開発中です。
    </Alert>
  )
}

import { Alert } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

export function AlertMessage() {
  return (
    <Alert
      icon={<IconUser size={20} />}
      title="個人運営のアプリです"
      color="teal"
    >
      個人が非商用で開発・運営しています。無料で公開しており、広告や課金はありません。
    </Alert>
  )
}

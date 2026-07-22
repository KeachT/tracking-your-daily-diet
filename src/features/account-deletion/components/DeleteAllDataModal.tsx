import {
  Alert,
  Button,
  Checkbox,
  Group,
  Modal,
  Stack,
  Text,
} from '@mantine/core'
import { IconAlertTriangle } from '@tabler/icons-react'
import { useState } from 'react'

import { useDeleteAllData } from '../hooks/useDeleteAllData'

type DeleteAllDataModalProps = {
  opened: boolean
  close: () => void
}

export function DeleteAllDataModal({ opened, close }: DeleteAllDataModalProps) {
  const [consented, setConsented] = useState(false)
  const { deleteStatus, handleDelete } = useDeleteAllData()

  const isDeleting = deleteStatus === 'loading'

  const closeModal = () => {
    if (isDeleting) return
    close()
  }

  const onConfirm = async () => {
    const succeeded = await handleDelete()
    if (succeeded) closeModal()
  }

  return (
    <Modal
      opened={opened}
      onClose={closeModal}
      title="全データを削除"
      centered
      styles={{ title: { flex: 1, textAlign: 'center' } }}
    >
      <Stack align="center">
        <Text size="sm" c="red" ta="center">
          すべての食事記録、目標、プリセットを削除します
          <br />
          アカウントは削除されません
          <br />
          この操作は取り消せません
        </Text>

        {deleteStatus === 'error' && (
          <Alert
            color="red"
            icon={<IconAlertTriangle size={16} />}
            title="削除に失敗しました"
          >
            一部のデータが削除できませんでした。もう一度お試しください。
          </Alert>
        )}

        <Checkbox
          checked={consented}
          onChange={(event) => setConsented(event.currentTarget.checked)}
          label="内容を理解しました。全データを削除します"
          disabled={isDeleting}
        />

        <Group justify="center">
          <Button variant="default" onClick={closeModal} disabled={isDeleting}>
            キャンセル
          </Button>
          <Button
            color="red"
            onClick={onConfirm}
            loading={isDeleting}
            disabled={!consented}
          >
            削除する
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

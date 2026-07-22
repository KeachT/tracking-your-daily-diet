import {
  Alert,
  Box,
  Button,
  Checkbox,
  Group,
  Modal,
  Stack,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconAlertTriangle, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'

import { useDeleteAllData } from '../hooks/useDeleteAllData'

export function DeleteAllDataButton() {
  const [opened, { open, close }] = useDisclosure(false)
  const [consented, setConsented] = useState(false)
  const { deleteStatus, handleDelete } = useDeleteAllData()

  const isDeleting = deleteStatus === 'loading'

  const closeModal = () => {
    if (isDeleting) return
    close()
    setConsented(false)
  }

  const onConfirm = async () => {
    const succeeded = await handleDelete()
    if (succeeded) closeModal()
  }

  return (
    <Box>
      <Button
        color="red"
        variant="outline"
        leftSection={<IconTrash size={16} />}
        onClick={open}
      >
        全データを削除
      </Button>

      <Modal
        opened={opened}
        onClose={closeModal}
        title="全データを削除"
        centered
      >
        <Stack>
          <Text size="sm">
            すべての食事記録・目標・プリセットを削除します。
            この操作は取り消せません。アカウントは残るので、引き続きご利用いただけます。
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
            label="内容を理解した上で、全データを削除します"
            disabled={isDeleting}
          />

          <Group justify="flex-end">
            <Button
              variant="default"
              onClick={closeModal}
              disabled={isDeleting}
            >
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
    </Box>
  )
}

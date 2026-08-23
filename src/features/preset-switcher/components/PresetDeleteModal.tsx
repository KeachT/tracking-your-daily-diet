import { Alert, Button, Group, Modal, Stack, Text } from '@mantine/core'
import { IconAlertTriangle } from '@tabler/icons-react'
import { useState } from 'react'

type PresetDeleteModalProps = {
  opened: boolean
  close: () => void
  presetLabel: string
  onConfirm: () => Promise<void>
}

export function PresetDeleteModal({
  opened,
  close,
  presetLabel,
  onConfirm,
}: PresetDeleteModalProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [hasFailed, setHasFailed] = useState(false)

  const closeModal = () => {
    if (isDeleting) return
    setHasFailed(false)
    close()
  }

  const handleConfirm = async () => {
    setIsDeleting(true)
    setHasFailed(false)
    try {
      await onConfirm()
      close()
    } catch {
      setHasFailed(true)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Modal
      opened={opened}
      onClose={closeModal}
      title="プリセットを削除"
      centered
      styles={{ title: { flex: 1, textAlign: 'center' } }}
    >
      <Stack align="center">
        <Text size="sm" c="red" ta="center">
          「{presetLabel}」を削除します
          <br />
          この操作は取り消せません
        </Text>

        {hasFailed && (
          <Alert
            color="red"
            icon={<IconAlertTriangle size={16} />}
            title="削除に失敗しました"
          >
            もう一度お試しください。
          </Alert>
        )}

        <Group justify="center">
          <Button variant="default" onClick={closeModal} disabled={isDeleting}>
            キャンセル
          </Button>
          <Button color="red" onClick={handleConfirm} loading={isDeleting}>
            削除する
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

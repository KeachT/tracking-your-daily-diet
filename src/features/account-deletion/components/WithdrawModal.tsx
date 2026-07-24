import {
  Alert,
  Button,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { IconAlertTriangle } from '@tabler/icons-react'
import { useState } from 'react'

import { useWithdrawAccount } from '../hooks/useWithdrawAccount'

const CONFIRM_WORD = '退会'

type WithdrawModalProps = {
  opened: boolean
  close: () => void
}

export function WithdrawModal({ opened, close }: WithdrawModalProps) {
  const [confirmText, setConfirmText] = useState('')
  const { withdrawStatus, errorMessage, handleWithdraw } = useWithdrawAccount()

  const isWithdrawing = withdrawStatus === 'loading'
  const canWithdraw = confirmText.trim() === CONFIRM_WORD && !isWithdrawing

  const closeModal = () => {
    if (isWithdrawing) return
    close()
  }

  return (
    <Modal
      opened={opened}
      onClose={closeModal}
      title="退会する"
      centered
      styles={{ title: { flex: 1, textAlign: 'center' } }}
    >
      <Stack align="center">
        <Text size="sm" c="red" ta="center">
          アカウントと、すべての食事記録・目標・プリセットが完全に削除されます
          <br />
          削除したデータとアカウントは復元できません
          <br />
          この操作は取り消せません
        </Text>

        {withdrawStatus === 'error' && errorMessage && (
          <Alert
            w="100%"
            color="red"
            icon={<IconAlertTriangle size={16} />}
            title="退会に失敗しました"
          >
            {errorMessage}
          </Alert>
        )}

        <TextInput
          w="100%"
          label={`確認のため「${CONFIRM_WORD}」と入力してください`}
          placeholder={CONFIRM_WORD}
          value={confirmText}
          onChange={(event) => setConfirmText(event.currentTarget.value)}
          disabled={isWithdrawing}
        />

        <Group justify="center">
          <Button
            variant="default"
            onClick={closeModal}
            disabled={isWithdrawing}
          >
            キャンセル
          </Button>
          <Button
            color="red"
            onClick={handleWithdraw}
            loading={isWithdrawing}
            disabled={!canWithdraw}
          >
            退会する
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

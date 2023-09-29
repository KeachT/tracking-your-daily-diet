import { Authenticator } from '@aws-amplify/ui-react'
import { Modal } from '@mantine/core'

type AuthenticatorModalProps = {
  opened: boolean
  close: () => void
}

export function AuthenticatorModal({ opened, close }: AuthenticatorModalProps) {
  return (
    <Modal opened={opened} onClose={close} withCloseButton={false} size="auto">
      <Authenticator />
    </Modal>
  )
}

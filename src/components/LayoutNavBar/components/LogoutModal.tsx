import { Box, Button, Center, Modal, Text } from '@mantine/core'

import { useHandleSignOut } from '../useHandleSignOut'

type LogoutModalProps = {
  opened: boolean
  close: () => void
}

export function LogoutModal({ opened, close }: LogoutModalProps) {
  const handleSignOut = useHandleSignOut()

  return (
    <Modal opened={opened} onClose={close} withCloseButton={false} size="auto">
      <Box p={20}>
        <Center>
          <Text mt={10} mb={30}>
            ログアウトしてよろしいですか？
          </Text>
        </Center>
        <Center>
          <Button
            variant="outline"
            onClick={(event) => {
              handleSignOut()
              event.preventDefault()
            }}
          >
            <span>Log out</span>
          </Button>
        </Center>
      </Box>
    </Modal>
  )
}

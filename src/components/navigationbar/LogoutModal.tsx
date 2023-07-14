import { Box, Button, Flex, Modal, Text } from '@mantine/core'
import { useHandleSignOut } from './useHandleSignOut'

type LogoutModalProps = {
  opened: boolean
  close: () => void
}

export function LogoutModal({ opened, close }: LogoutModalProps) {
  const handleSignOut = useHandleSignOut()

  return (
    <Modal opened={opened} onClose={close} size="auto">
      <Box p={20}>
        <Text align="center" mb={30}>
          Are you sure you want to log out?
        </Text>
        <Flex justify="center">
          <Button
            variant="outline"
            color="gray"
            onClick={(event) => {
              handleSignOut()
              event.preventDefault()
            }}
          >
            <span>Log out</span>
          </Button>
        </Flex>
      </Box>
    </Modal>
  )
}

import { Box, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconUserX } from '@tabler/icons-react'

import { useGuestModeStore } from '@/stores'

import { WithdrawModal } from './WithdrawModal'

export function WithdrawButton() {
  const isGuestMode = useGuestModeStore((state) => state.isGuestMode)
  const [opened, { open, close }] = useDisclosure(false)

  if (isGuestMode) return null

  return (
    <Box>
      <Button
        color="red"
        variant="filled"
        leftSection={<IconUserX size={16} />}
        onClick={open}
      >
        退会する
      </Button>

      {opened && <WithdrawModal opened={opened} close={close} />}
    </Box>
  )
}

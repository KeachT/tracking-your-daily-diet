import { Box, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconTrash } from '@tabler/icons-react'

import { DeleteAllDataModal } from './DeleteAllDataModal'

export function DeleteAllDataButton() {
  const [opened, { open, close }] = useDisclosure(false)

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

      {opened && <DeleteAllDataModal opened={opened} close={close} />}
    </Box>
  )
}

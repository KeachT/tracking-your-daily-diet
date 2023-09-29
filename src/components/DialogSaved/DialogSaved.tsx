import { Dialog, Group, Text } from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'

type DialogSavedProps = {
  opened: boolean
  close: () => void
}

export function DialogSaved({ opened, close }: DialogSavedProps) {
  return (
    <Dialog opened={opened} onClose={close} withBorder>
      <Group>
        <IconCircleCheck size={30} strokeWidth={2.5} color="teal" />
        <Text>Saved!</Text>
      </Group>
    </Dialog>
  )
}

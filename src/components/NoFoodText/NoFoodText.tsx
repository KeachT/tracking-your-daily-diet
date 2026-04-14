import { Stack, Text } from '@mantine/core'
import { IconSalad } from '@tabler/icons-react'

export function NoFoodText() {
  return (
    <Stack align="center" gap="xs" py="md">
      <IconSalad size={32} stroke={1.5} color="gray" />
      <Text c="dimmed">まだ食品が登録されていません</Text>
    </Stack>
  )
}

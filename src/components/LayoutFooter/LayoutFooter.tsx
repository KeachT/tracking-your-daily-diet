import { Anchor, Box, Group, Text } from '@mantine/core'
import Link from 'next/link'

import { Path } from '../../constants'

export function LayoutFooter() {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Group justify="space-between" wrap="wrap" gap="xs" m={20}>
        <Text size="xs" c="dimmed">
          © 2025 Tracking Your Daily Diet
        </Text>
        <Anchor component={Link} href={Path.Terms} size="xs" c="dimmed">
          利用規約
        </Anchor>
        <Anchor component={Link} href={Path.PrivacyPolicy} size="xs" c="dimmed">
          プライバシーポリシー
        </Anchor>
      </Group>
    </Box>
  )
}

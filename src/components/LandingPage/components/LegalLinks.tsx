import { Anchor, Group } from '@mantine/core'
import Link from 'next/link'

import { Path } from '../../../constants'

export function LegalLinks() {
  return (
    <Group justify="center" gap="md">
      <Anchor component={Link} href={Path.Terms} size="sm" c="dimmed">
        利用規約
      </Anchor>
      <Anchor component={Link} href={Path.PrivacyPolicy} size="sm" c="dimmed">
        プライバシーポリシー
      </Anchor>
    </Group>
  )
}

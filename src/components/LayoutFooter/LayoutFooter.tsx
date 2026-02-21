import { Box, Group, Text } from '@mantine/core'
import Link from 'next/link'

import { Path } from '../../constants'
import styles from './LayoutFooter.module.css'

export function LayoutFooter() {
  return (
    <Box className={styles.footer}>
      <Group justify="space-between" wrap="wrap" gap="xs" className={styles.inner}>
        <Text size="xs" c="dimmed">
          © 2025 Tracking Your Daily Diet
        </Text>
        <Group gap="sm" wrap="wrap">
          <Link href={Path.Terms} className={styles.link}>
            利用規約
          </Link>
          <Link href={Path.PrivacyPolicy} className={styles.link}>
            プライバシーポリシー
          </Link>
        </Group>
      </Group>
    </Box>
  )
}

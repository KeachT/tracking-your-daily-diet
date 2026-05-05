import { Box, Group, Text } from '@mantine/core'
import Link from 'next/link'

import { Path } from '../../constants'
import styles from './LayoutFooter.module.css'

const GITHUB_URL = 'https://github.com/KeachT/tracking-your-daily-diet'
const CONTACT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdyT66VkYqeusPGs_bSUZBo7kQ3YgWsAz8Wnd8TDbM7a38c0Q/viewform?usp=header'

export function LayoutFooter() {
  return (
    <Box className={styles.footer}>
      <Group
        justify="space-between"
        wrap="wrap"
        gap="xs"
        className={styles.inner}
      >
        <Text size="xs" c="dimmed">
          © 2025 Tracking Your Daily Diet
        </Text>
        <Group gap="sm" wrap="wrap">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="お問い合わせフォームを開く（外部サイト）"
            className={styles.link}
          >
            お問い合わせ
          </a>
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

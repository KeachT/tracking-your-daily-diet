import { Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

import classes from '../styles/AppPreviewSection.module.css'

export function AppPreviewSection() {
  return (
    <Stack gap="xl" align="center" id="preview">
      <Title order={2} size="xl" ta="center" c="dimmed">
        実際の画面
      </Title>

      <Stack gap="xs" className={classes.previewList}>
        <Text size="sm" c="dimmed" ta="center">
          食事を記録してその日の栄養バランスをチェック
        </Text>

        <Image
          src="/images/lp/day-desktop.webp"
          alt="日別の食事記録と栄養サマリ画面（デスクトップ）"
          width={2937}
          height={1615}
          className={`${classes.screenshot} ${classes.desktopOnly}`}
        />
        <Image
          src="/images/lp/day-mobile.webp"
          alt="日別の食事記録と栄養サマリ画面（モバイル）"
          width={686}
          height={1414}
          className={`${classes.screenshot} ${classes.mobileOnly}`}
        />
      </Stack>
    </Stack>
  )
}

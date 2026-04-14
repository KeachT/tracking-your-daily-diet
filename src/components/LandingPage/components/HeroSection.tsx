import { Button, Stack, Text } from '@mantine/core'

import classes from '../styles/HeroSection.module.css'

type HeroSectionProps = {
  open: () => void
  onGuestLogin: () => void
}

export function HeroSection({ open, onGuestLogin }: HeroSectionProps) {
  return (
    <div className={classes.heroWrapper}>
      <Stack align="center" gap="xl" m={20}>
        <Text
          component="h1"
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 45 }}
          className={classes.title}
          m={20}
        >
          もう食事管理に悩まない
        </Text>

        <Text className={classes.description} c="dimmed" ta="center">
          毎日の食事をカンタン記録。
          <br />
          カロリーと栄養バランスを自動で可視化して、あなたの健康をサポートします。
        </Text>

        <Stack gap={4} align="center">
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue', deg: 45 }}
            onClick={open}
          >
            無料で始める
          </Button>
          <Text size="xs" c="dimmed">
            アカウント作成で全機能を利用 / クレジットカード不要
          </Text>
        </Stack>

        <Stack gap={4} align="center">
          <Button
            size="lg"
            variant="outline"
            color="teal"
            onClick={onGuestLogin}
          >
            ゲストとして試す
          </Button>
          <Text size="xs" c="dimmed">
            登録不要で今すぐお試し
          </Text>
        </Stack>
      </Stack>
    </div>
  )
}

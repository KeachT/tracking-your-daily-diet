import { Button, Stack, Text } from '@mantine/core'

import classes from '../styles/HeroSection.module.css'

type HeroSectionProps = {
  open: () => void
  onGuestLogin: () => void
}

export function HeroSection({ open, onGuestLogin }: HeroSectionProps) {
  return (
    <Stack align="center" gap="xl" m={20}>
      <Text
        variant="gradient"
        gradient={{ from: 'teal', to: 'blue', deg: 45 }}
        className={classes.title}
        m={20}
      >
        健康的な食生活をサポート
      </Text>

      <Text className={classes.description} c="dimmed" ta="center">
        食事管理を簡単に。
        <br />
        カロリーと栄養素を可視化、ダイエットをサポートします。
      </Text>

      <Button
        size="lg"
        variant="gradient"
        gradient={{ from: 'teal', to: 'blue', deg: 45 }}
        onClick={open}
      >
        無料で始める
      </Button>

      <Button size="md" variant="subtle" color="teal" onClick={onGuestLogin}>
        ゲストとして試す
      </Button>
    </Stack>
  )
}

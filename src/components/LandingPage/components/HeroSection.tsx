import { Button, Group, Stack, Text } from '@mantine/core'

import classes from '../styles/HeroSection.module.css'

type HeroSectionProps = {
  open: () => void
}

export function HeroSection({ open }: HeroSectionProps) {
  return (
    <Stack align="center" gap="xl">
      <h1 className={classes.title}>
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 45 }}
          inherit
        >
          あなたの健康的な食生活を
          <br />
          サポートします
        </Text>
      </h1>

      <Text className={classes.description} c="dimmed" maw={600}>
        毎日の食事管理をもっと簡単に。
        <br />
        栄養バランスを自動で計算、健康的な生活をサポートします。
      </Text>

      <Group>
        <Button
          size="lg"
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 45 }}
          onClick={open}
        >
          無料で始める
        </Button>
      </Group>
    </Stack>
  )
}

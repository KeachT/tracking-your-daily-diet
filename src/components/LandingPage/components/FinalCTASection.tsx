import { Button, Stack, Text, Title } from '@mantine/core'

import classes from '../styles/FinalCTASection.module.css'

type FinalCTASectionProps = {
  open: () => void
  onGuestLogin: () => void
}

export function FinalCTASection({ open, onGuestLogin }: FinalCTASectionProps) {
  return (
    <div className={classes.wrapper}>
      <Stack align="center" gap="lg">
        <Title order={2} c="white" ta="center">
          今すぐ始めましょう
        </Title>

        <Text c="white" ta="center" size="lg" maw={500}>
          食事管理をもっとカンタンに。
          <br />
          あなたの健康的な食生活を今日からサポートします。
        </Text>

        <Button size="lg" w={220} variant="white" color="teal" onClick={open}>
          無料で始める
        </Button>

        <Button
          size="lg"
          w={220}
          variant="outline"
          color="white"
          onClick={onGuestLogin}
        >
          ゲストとして試す
        </Button>
      </Stack>
    </div>
  )
}

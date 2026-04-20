import { Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import {
  IconMoodSad,
  IconNotebook,
  IconQuestionMark,
  IconTargetOff,
} from '@tabler/icons-react'

import classes from '../styles/PainPointSection.module.css'

const painPoints = [
  {
    icon: <IconMoodSad size={28} color="var(--mantine-color-dimmed)" />,
    text: '食事記録が面倒で続かない...',
  },
  {
    icon: <IconQuestionMark size={28} color="var(--mantine-color-dimmed)" />,
    text: 'カロリー計算が複雑すぎる...',
  },
  {
    icon: <IconTargetOff size={28} color="var(--mantine-color-dimmed)" />,
    text: '目標を立てても進捗がわからない...',
  },
  {
    icon: <IconNotebook size={28} color="var(--mantine-color-dimmed)" />,
    text: '紙やスプレッドシートでの管理に限界...',
  },
]

export function PainPointSection() {
  return (
    <div className={classes.wrapper}>
      <Stack gap="xl" align="center">
        <Title order={2} ta="center">
          こんなお悩みありませんか？
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {painPoints.map((item) => (
            <Group key={item.text} gap="md" wrap="nowrap">
              {item.icon}
              <Text size="md">{item.text}</Text>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
    </div>
  )
}

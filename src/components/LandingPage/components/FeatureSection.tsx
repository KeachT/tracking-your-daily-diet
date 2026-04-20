import { Card, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconChartBar, IconLeaf, IconUserCircle } from '@tabler/icons-react'

import styles from '../styles/FeatureSection.module.css'

const features = [
  {
    icon: <IconLeaf size={48} />,
    color: 'teal' as const,
    title: '食事記録',
    description:
      'メニューを選ぶだけで毎日の食事をカンタン記録。朝食・昼食・夕食・間食をまとめて管理できます。',
  },
  {
    icon: <IconChartBar size={48} />,
    color: 'blue' as const,
    title: 'データ分析',
    description:
      'カロリーと栄養素（タンパク質・炭水化物・脂質）をグラフで可視化。週間トレンドもひと目でチェック。',
  },
  {
    icon: <IconUserCircle size={48} />,
    color: 'orange' as const,
    title: 'パーソナライズ',
    description:
      'あなたの目標カロリーと栄養バランスを設定。毎日の進捗をチャートで確認できます。',
  },
]

export function FeatureSection() {
  return (
    <Stack gap="xl" id="features">
      <Title order={2} size="xl" ta="center" c="dimmed">
        主な機能
      </Title>

      <SimpleGrid cols={{ base: 1, xs: 3 }} spacing="md" verticalSpacing="md">
        {features.map((feature) => (
          <Card
            key={feature.title}
            shadow="sm"
            padding="xl"
            radius="md"
            withBorder
            className={styles.card}
          >
            <Stack
              align="center"
              gap="md"
              justify="center"
              className={styles.cardContent}
            >
              <ThemeIcon
                size={64}
                radius="xl"
                variant="light"
                color={feature.color}
              >
                {feature.icon}
              </ThemeIcon>
              <Title order={3} size="lg" fw={500} ta="center">
                {feature.title}
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                {feature.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

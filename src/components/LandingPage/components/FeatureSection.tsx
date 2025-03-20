import { Card, Center, SimpleGrid, Stack, Text } from '@mantine/core'
import { IconChartBar, IconLeaf, IconUserCircle } from '@tabler/icons-react'

import styles from './FeatureSection.module.css'

const features = [
  {
    icon: <IconLeaf size={32} color="teal" />,
    title: '食事記録',
    description: '毎日の食事を簡単に記録',
  },
  {
    icon: <IconChartBar size={32} color="blue" />,
    title: 'データ分析',
    description: 'カロリーと栄養素をグラフで表示',
  },
  {
    icon: <IconUserCircle size={32} color="orange" />,
    title: 'パーソナライズ',
    description: '目標を設定し毎日の進捗を管理',
  },
]

export function FeatureSection() {
  return (
    <Stack gap="xl" id="features">
      <Center>
        <Text size="xl">主な機能</Text>
      </Center>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" verticalSpacing="md">
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
              {feature.icon}
              <Text size="lg" fw={500} ta="center">
                {feature.title}
              </Text>
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

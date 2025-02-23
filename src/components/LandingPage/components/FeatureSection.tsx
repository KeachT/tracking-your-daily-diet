import { Card, Center, Group, Stack, Text } from '@mantine/core'
import { IconChartBar, IconLeaf, IconUserCircle } from '@tabler/icons-react'

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

      <Group grow align="stretch">
        {features.map((feature) => (
          <Card
            key={feature.title}
            shadow="sm"
            padding="xl"
            radius="md"
            withBorder
          >
            <Stack align="center" gap="md">
              {feature.icon}
              <Text size="lg">{feature.title}</Text>
              <Text size="sm" c="dimmed">
                {feature.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </Group>
    </Stack>
  )
}

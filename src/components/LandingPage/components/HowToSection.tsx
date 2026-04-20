import { SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { IconChartBar, IconPencil, IconUserPlus } from '@tabler/icons-react'

import classes from '../styles/HowToSection.module.css'

const steps = [
  {
    number: '1',
    icon: <IconUserPlus size={32} color="var(--mantine-color-teal-6)" />,
    title: 'アカウント作成',
    description: '無料で登録、またはゲストモードで即開始',
  },
  {
    number: '2',
    icon: <IconPencil size={32} color="var(--mantine-color-teal-6)" />,
    title: '食事を記録',
    description: 'メニューを選んでタップするだけ',
  },
  {
    number: '3',
    icon: <IconChartBar size={32} color="var(--mantine-color-teal-6)" />,
    title: '分析・改善',
    description: 'グラフで栄養バランスをチェック',
  },
]

export function HowToSection() {
  return (
    <Stack gap="xl" align="center" id="howto">
      <Title order={2} ta="center">
        カンタン 3 ステップ
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
        {steps.map((step) => (
          <Stack key={step.number} align="center" gap="sm">
            <Text className={classes.stepNumber}>{step.number}</Text>
            {step.icon}
            <Title order={3} size="md" ta="center">
              {step.title}
            </Title>
            <Text size="sm" c="dimmed" ta="center">
              {step.description}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

import { Grid, RingProgress, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import styles from '../style/NutritionRing.module.css'
import { Nutrition } from '../types'

export function NutritionRing({ name, number, percent, color }: Nutrition) {
  const unit = name === 'カロリー' ? 'Kcal' : 'g'
  const isMobile = useMediaQuery('(max-width: 62em)')

  return (
    <Grid.Col span={{ base: 12, md: 3 }} key={name}>
      <Text fw={200} size="sm">
        {name}
      </Text>

      <RingProgress
        size={isMobile ? 110 : 140}
        thickness={isMobile ? 5 : 6}
        roundCaps
        label={
          <div className={styles.label}>
            <Text c="blue" fw={400} size="lg">
              {number}
            </Text>
            <Text fw={200} size="sm">
              {unit}
            </Text>
          </div>
        }
        sections={[
          {
            value: percent,
            color: color,
            tooltip: percent + '%',
          },
        ]}
      />
    </Grid.Col>
  )
}

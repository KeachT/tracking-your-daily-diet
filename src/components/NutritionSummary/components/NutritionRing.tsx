import { Grid, RingProgress, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import styles from '../style/NutritionRing.module.css'
import { Nutrition } from '../types'

export function NutritionRing({ name, number, percent, color }: Nutrition) {
  const unit = name === 'カロリー' ? 'Kcal' : 'g'
  const isTabletOrMobile = useMediaQuery('(max-width: 62em)')
  const isSmallMobile = useMediaQuery('(max-width: 30em)')

  return (
    <Grid.Col span={{ base: 3, md: 3 }} key={name}>
      <Text fw={200} size={isSmallMobile ? 'xs' : 'sm'}>
        {name}
      </Text>

      <RingProgress
        size={isSmallMobile ? 72 : isTabletOrMobile ? 100 : 140}
        thickness={isSmallMobile ? 4 : isTabletOrMobile ? 5 : 6}
        roundCaps
        label={
          <div className={styles.label}>
            <Text c="blue" fw={400} size={isSmallMobile ? 'sm' : 'lg'}>
              {number}
            </Text>
            <Text fw={200} size={isSmallMobile ? 'xs' : 'sm'}>
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

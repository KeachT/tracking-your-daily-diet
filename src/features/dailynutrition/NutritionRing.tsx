import { Grid, RingProgress, Text } from '@mantine/core'
import { Nutrition } from './types'

export function NutritionRing({ name, number, percent, color }: Nutrition) {
  const unit = name === 'Calorie' ? 'Kcal' : 'g'

  return (
    <Grid.Col sm={6} md={3} key={name}>
      <Text weight={200} size="md">
        {name}
      </Text>

      <RingProgress
        size={150}
        thickness={8}
        roundCaps
        label={
          <div>
            <Text color="blue" weight={400} align="center" size="lg">
              {number}
            </Text>
            <Text weight={200} align="center" size="sm">
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

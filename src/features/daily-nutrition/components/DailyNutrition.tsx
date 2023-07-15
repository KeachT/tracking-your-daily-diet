import { Grid } from '@mantine/core'
import { Nutrition } from '../types'
import { NutritionRing } from './NutritionRing'

// TODO This array is mock data.
const nutritions: Nutrition[] = [
  {
    name: 'Calorie',
    color: 'violet',
    number: 1800,
    percent: 70,
  },
  {
    name: 'Protein',
    color: 'red',
    number: 80,
    percent: 75,
  },
  { name: 'Fat', color: 'yellow', number: 70, percent: 90 },
  {
    name: `Carbonhydrates`,
    color: 'teal',
    number: 120,
    percent: 85,
  },
]

export function DailyNutrition() {
  return (
    <Grid gutter={50}>
      {nutritions.map((nutrition) => (
        <NutritionRing
          key={nutrition.name}
          name={nutrition.name}
          number={nutrition.number}
          percent={nutrition.percent}
          color={nutrition.color}
        />
      ))}
    </Grid>
  )
}

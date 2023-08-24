import { Grid, Paper } from '@mantine/core'
import { Nutrition } from '../types'
import { NutritionRing } from './NutritionRing'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'

const createNutritions = (
  dailyCalories: number,
  dailyProtein: number,
  dailyFat: number,
  dailyCarbohydrates: number
): Nutrition[] => [
  {
    name: 'Calories',
    color: 'violet',
    number: dailyCalories,
    percent: 70,
  },
  {
    name: 'Protein',
    color: 'red',
    number: dailyProtein,
    percent: 75,
  },
  { name: 'Fat', color: 'yellow', number: dailyFat, percent: 90 },
  {
    name: `Carbonhydrates`,
    color: 'teal',
    number: dailyCarbohydrates,
    percent: 85,
  },
]

export function Nutritions() {
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  const nutritions = createNutritions(
    dailyCalories,
    dailyProtein,
    dailyFat,
    dailyCarbohydrates
  )

  return (
    <Paper withBorder radius="md" p="md">
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
    </Paper>
  )
}

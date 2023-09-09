import { Grid, Paper } from '@mantine/core'

import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { createNutritions } from '../utils'
import { NutritionRing } from './NutritionRing'

export function Nutritions() {
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  const { calories, protein, fat, carbohydrates } = useDailyGoalStore()

  const nutritions = createNutritions(
    dailyCalories,
    dailyProtein,
    dailyFat,
    dailyCarbohydrates,
    calories,
    protein,
    fat,
    carbohydrates
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

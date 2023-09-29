import { Grid, Paper } from '@mantine/core'

import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { createNutritions } from '../utils'
import { NutritionRing } from './NutritionRing'

export function Nutritions() {
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  const { dailyGoal } = useDailyGoalStore()

  const nutritions = createNutritions(
    dailyCalories,
    dailyProtein,
    dailyFat,
    dailyCarbohydrates,
    dailyGoal.calories || 0,
    dailyGoal.protein || 0,
    dailyGoal.fat || 0,
    dailyGoal.carbohydrates || 0
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

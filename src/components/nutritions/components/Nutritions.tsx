import { Grid, Paper } from '@mantine/core'

import { NutritionNumbersState, useDailyGoalStore } from '../../../stores'
import { createNutritions } from '../utils'
import { NutritionRing } from './NutritionRing'

type NutritionsProps = {
  calories: number
  protein: number
  fat: number
  carbohydrates: number
}

export function Nutritions({
  calories,
  protein,
  fat,
  carbohydrates,
}: NutritionsProps) {
  const { dailyGoal } = useDailyGoalStore()

  const nutritions = createNutritions(
    calories,
    protein,
    fat,
    carbohydrates,
    dailyGoal.calories || 0,
    dailyGoal.protein || 0,
    dailyGoal.fat || 0,
    dailyGoal.carbohydrates || 0
  )

  return (
    <Paper withBorder radius="sm" p="md">
      <Grid gutter={20}>
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

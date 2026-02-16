import { Grid, Paper } from '@mantine/core'

import { useDailyGoalStore } from '../../../stores'
import { createNutritions } from '../utils'
import { NutritionRing } from './NutritionRing'

type NutritionSummaryProps = {
  calories: number
  protein: number
  fat: number
  carbohydrates: number
}

export function NutritionSummary({
  calories,
  protein,
  fat,
  carbohydrates,
}: NutritionSummaryProps) {
  const dailyGoal = useDailyGoalStore((state) => state.dailyGoal)

  const nutritions = createNutritions(
    calories,
    protein,
    fat,
    carbohydrates,
    dailyGoal.calories || 0,
    dailyGoal.protein || 0,
    dailyGoal.fat || 0,
    dailyGoal.carbohydrates || 0,
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

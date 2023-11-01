import { Grid, Paper } from '@mantine/core'

import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { NutritionNumbersState } from '../../../stores/nutritionNumbers'
import { createNutritions } from '../utils'
import { NutritionRing } from './NutritionRing'

type NutritionsProps = {
  dailyCalories: NutritionNumbersState['dailyCalories']
  dailyProtein: NutritionNumbersState['dailyProtein']
  dailyFat: NutritionNumbersState['dailyFat']
  dailyCarbohydrates: NutritionNumbersState['dailyCarbohydrates']
}

export function Nutritions({
  dailyCalories,
  dailyProtein,
  dailyFat,
  dailyCarbohydrates,
}: NutritionsProps) {
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

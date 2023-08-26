import { Grid, Paper } from '@mantine/core'
import { NutritionRing } from './NutritionRing'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { createNutritions } from '../utils'

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

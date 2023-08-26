import { Grid, Paper } from '@mantine/core'
import { Nutrition } from '../types'
import { NutritionRing } from './NutritionRing'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { useDailyGoalStore } from '../../../stores/dailyGoal'

const calcDailyPercent = (daily: number, goal: number) =>
  Math.round((daily / (goal ? goal : 1)) * 100)

const createNutritions = (
  // daily
  dailyCalories: number,
  dailyProtein: number,
  dailyFat: number,
  dailyCarbohydrates: number,
  // dailyGoals
  calories: number,
  protein: number,
  fat: number,
  carbohydrates: number
): Nutrition[] => [
  {
    name: 'Calories',
    color: 'violet',
    number: dailyCalories,
    percent: calcDailyPercent(dailyCalories, calories),
  },
  {
    name: 'Protein',
    color: 'red',
    number: dailyProtein,
    percent: calcDailyPercent(dailyProtein, protein),
  },
  {
    name: 'Fat',
    color: 'yellow',
    number: dailyFat,
    percent: calcDailyPercent(dailyFat, fat),
  },
  {
    name: `Carbonhydrates`,
    color: 'teal',
    number: dailyCarbohydrates,
    percent: calcDailyPercent(dailyCarbohydrates, carbohydrates),
  },
]

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

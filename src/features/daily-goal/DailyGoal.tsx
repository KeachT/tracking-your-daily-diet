import { Box, Button } from '@mantine/core'

import { useDailyGoalStore } from '../../stores/dailyGoal'
import { addDailyGoal, updDailyGoal } from './api'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const { dailyGoal, setDailyGoal } = useDailyGoalStore()

  const setNutritionValues = (value: number, nutritionName: string) => {
    const newDailyGoal = { ...dailyGoal, [nutritionName]: value }
    setDailyGoal(newDailyGoal)
  }

  const handleClick = () => {
    if (!dailyGoal.id) {
      addDailyGoal(dailyGoal, setDailyGoal)
      return
    }
    updDailyGoal(dailyGoal, setDailyGoal)
  }

  return (
    <Box>
      <DailyGoalNumberInput
        label="Calories (Kcal)"
        placeholder="Calories"
        value={dailyGoal.calories || 0}
        handleChange={(values) => setNutritionValues(values, 'calories')}
        step={10}
        withAsterisk
      />
      <DailyGoalNumberInput
        label="Protein (g)"
        placeholder="Protein"
        value={dailyGoal.protein || 0}
        handleChange={(values) => setNutritionValues(values, 'protein')}
        step={1}
      />
      <DailyGoalNumberInput
        label="Fat (g)"
        placeholder="Fat"
        value={dailyGoal.fat || 0}
        handleChange={(values) => setNutritionValues(values, 'fat')}
        step={1}
      />
      <DailyGoalNumberInput
        label="Carbohydrates (g)"
        placeholder="Carbohydrates"
        value={dailyGoal.carbohydrates || 0}
        handleChange={(values) => setNutritionValues(values, 'carbohydrates')}
        step={1}
      />

      <Button mr={50} onClick={handleClick}>
        Save
      </Button>
    </Box>
  )
}

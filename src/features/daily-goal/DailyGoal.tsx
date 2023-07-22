import { useState } from 'react'
import { Box } from '@mantine/core'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const [calories, setCalories] = useState<number | ''>('')
  const [protein, setProtein] = useState<number | ''>('')
  const [fat, setFat] = useState<number | ''>('')
  const [carbohydrates, setCarbohydrates] = useState<number | ''>('')

  return (
    <Box>
      <DailyGoalNumberInput
        label="Calories (Kcal)"
        placeholder="Calories"
        value={calories}
        handleChange={setCalories}
        step={10}
        withAsterisk
      />
      <DailyGoalNumberInput
        label="Protein (g)"
        placeholder="Protein"
        value={protein}
        handleChange={setProtein}
        step={1}
      />
      <DailyGoalNumberInput
        label="Fat (g)"
        placeholder="Fat"
        value={fat}
        handleChange={setFat}
        step={1}
      />
      <DailyGoalNumberInput
        label="Carbohydrates (g)"
        placeholder="Carbohydrates"
        value={carbohydrates}
        handleChange={setCarbohydrates}
        step={1}
      />
    </Box>
  )
}

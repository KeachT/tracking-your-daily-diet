import { Box, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'

import { DialogSaved } from '../../../components/DialogSaved'
import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { addDailyGoal, updDailyGoal } from '../api'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const [opened, { open, close }] = useDisclosure(false)
  const { dailyGoal, setDailyGoal } = useDailyGoalStore()

  const setNutritionValues = (
    value: number | string,
    nutritionName: string
  ) => {
    const newDailyGoal = { ...dailyGoal, [nutritionName]: value }
    setDailyGoal(newDailyGoal)
  }

  const handleClick = () => {
    open()

    if (!dailyGoal.id) {
      addDailyGoal(dailyGoal)
      return
    }

    updDailyGoal(dailyGoal)
  }

  useEffect(() => {
    opened &&
      setTimeout(() => {
        close()
      }, 3000)
  }, [opened, close])

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

      {opened && <DialogSaved opened={opened} close={close} />}
    </Box>
  )
}

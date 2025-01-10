import { Box, Button, Text } from '@mantine/core'
import { Notifications, notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'

import { useDailyGoalStore } from '../../../stores'
import { saveDailyGoal } from '../utils'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const { dailyGoal, setDailyGoal } = useDailyGoalStore()

  const setNutritionValues = (
    value: number | string,
    nutritionName: string
  ) => {
    const newDailyGoal = { ...dailyGoal, [nutritionName]: value }
    setDailyGoal(newDailyGoal)
  }

  const handleClick = () => {
    try {
      saveDailyGoal(dailyGoal, setDailyGoal)
      handleSuccess()
    } catch (err) {
      handleError()
    }
  }

  const handleSuccess = () => {
    notifications.show({
      title: 'Saved!',
      message: 'Settings',
      color: 'green',
      icon: <IconCheck />,
    })
  }

  const handleError = () => {
    notifications.show({
      title: 'Error!',
      message: 'Settings',
      color: 'red',
      icon: <IconX />,
    })
  }

  return (
    <Box>
      <Box maw={700} mb={10}>
        <Text fw={200} size="xl">
          Daily Goal
        </Text>
      </Box>

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

      <Notifications limit={10} autoClose={2000} />
    </Box>
  )
}

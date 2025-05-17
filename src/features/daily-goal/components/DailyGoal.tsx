import { Box, Button } from '@mantine/core'
import { Notifications, notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import {
  NOTIFICATION_DISPLAY_DURATION_MS,
  SAVE_BUTTON_REENABLE_DELAY_MS,
} from '../../../constants'
import { useDailyGoalStore } from '../../../stores'
import { saveDailyGoal } from '../utils'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)
  const { dailyGoal, setDailyGoal } = useDailyGoalStore()

  const setNutritionValues = (
    value: number | string,
    nutritionName: string
  ) => {
    const newDailyGoal = { ...dailyGoal, [nutritionName]: value }
    setDailyGoal(newDailyGoal)
  }

  const handleSave = () => {
    setIsSaveButtonDisabled(true)
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
    setTimeout(
      () => setIsSaveButtonDisabled(false),
      SAVE_BUTTON_REENABLE_DELAY_MS
    )
  }

  const handleError = () => {
    notifications.show({
      title: 'Error!',
      message: 'Settings',
      color: 'red',
      icon: <IconX />,
    })
    setTimeout(
      () => setIsSaveButtonDisabled(false),
      SAVE_BUTTON_REENABLE_DELAY_MS
    )
  }

  return (
    <Box>
      <DailyGoalNumberInput
        label="カロリー (Kcal)"
        placeholder="カロリー"
        value={dailyGoal.calories || 0}
        handleChange={(values) => setNutritionValues(values, 'calories')}
        step={10}
        withAsterisk
      />
      <DailyGoalNumberInput
        label="タンパク質 (g)"
        placeholder="タンパク質"
        value={dailyGoal.protein || 0}
        handleChange={(values) => setNutritionValues(values, 'protein')}
        step={1}
      />
      <DailyGoalNumberInput
        label="脂質 (g)"
        placeholder="脂質"
        value={dailyGoal.fat || 0}
        handleChange={(values) => setNutritionValues(values, 'fat')}
        step={1}
      />
      <DailyGoalNumberInput
        label="炭水化物 (g)"
        placeholder="炭水化物"
        value={dailyGoal.carbohydrates || 0}
        handleChange={(values) => setNutritionValues(values, 'carbohydrates')}
        step={1}
      />

      <Button
        mr={50}
        color="teal"
        onClick={handleSave}
        disabled={isSaveButtonDisabled}
      >
        保存
      </Button>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Box>
  )
}

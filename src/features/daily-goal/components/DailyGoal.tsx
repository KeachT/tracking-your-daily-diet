import { Box } from '@mantine/core'
import { useEffect } from 'react'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { SaveButton } from '../../../components/SaveButton'
import { useDailyGoalStore } from '../../../stores'
import { loadDailyGoal } from '../../../utils'
import { saveDailyGoal } from '../utils'
import { DailyGoalEmptyNotice } from './DailyGoalEmptyNotice'
import { DailyGoalLoadError } from './DailyGoalLoadError'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const dailyGoal = useDailyGoalStore((state) => state.dailyGoal)
  const loadStatus = useDailyGoalStore((state) => state.loadStatus)
  const setDailyGoal = useDailyGoalStore((state) => state.setDailyGoal)

  useEffect(() => {
    if (useDailyGoalStore.getState().loadStatus !== 'ready') {
      loadDailyGoal()
    }
  }, [])

  const setNutritionValues = (
    value: number | string,
    nutritionName: string,
  ) => {
    const newDailyGoal = { ...dailyGoal, [nutritionName]: value }
    setDailyGoal(newDailyGoal)
  }

  if (loadStatus === 'error') {
    return <DailyGoalLoadError />
  }

  if (loadStatus !== 'ready') {
    return <LoadingSkeleton height={400} />
  }

  const hasNoGoalYet = !dailyGoal.id

  return (
    <Box>
      {hasNoGoalYet && <DailyGoalEmptyNotice />}

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

      <SaveButton
        mr={50}
        onSave={() => saveDailyGoal(dailyGoal, setDailyGoal)}
        statusLabels={{ success: '目標保存成功', error: '目標保存失敗' }}
      />
    </Box>
  )
}

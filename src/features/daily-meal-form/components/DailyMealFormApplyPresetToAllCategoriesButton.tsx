import { Button } from '@mantine/core'
import { useState } from 'react'

import {
  useCurrentDateStore,
  useLoadingStateStore,
  useUserMealPresetStore,
} from '../../../stores'
import { createStringFromDate, showNotification } from '../../../utils'
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import { createAppliedPresetValues, saveAndSetDailyMealRecord } from '../utils'

type DailyMealFormApplyPresetToAllCategoriesButtonProps = {
  forms: FormsType
}

export function DailyMealFormApplyPresetToAllCategoriesButton({
  forms,
}: DailyMealFormApplyPresetToAllCategoriesButtonProps) {
  const [isApplyingPreset, setIsApplyingPreset] = useState(false)
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)
  const dailyMealRecord = useDailyMealRecordStore(
    (state) => state.dailyMealRecord,
  )
  const setDailyMealRecord = useDailyMealRecordStore(
    (state) => state.setDailyMealRecord,
  )
  const userMealPreset = useUserMealPresetStore((state) => state.userMealPreset)
  const currentDateString = createStringFromDate(currentDate)

  const handleApplyPresetToAllCategories = async () => {
    setIsApplyingPreset(true)
    if (!userMealPreset) {
      showNotification(
        'Day',
        'プリセットが読み込めませんでした',
        'error',
        setIsApplyingPreset,
      )
      return
    }
    try {
      const appliedValues = createAppliedPresetValues(userMealPreset)
      if (!appliedValues) {
        throw new Error('Failed to apply preset values')
      }
      forms.setValues(appliedValues)
      await saveAndSetDailyMealRecord(
        forms,
        currentDateString,
        dailyMealRecord || null,
        setDailyMealRecord,
      )
      showNotification(
        'Day',
        'プリセットを適用しました',
        'success',
        setIsApplyingPreset,
      )
    } catch (err) {
      showNotification(
        'Day',
        'プリセットの適用に失敗しました',
        'error',
        setIsApplyingPreset,
      )
    }
  }

  return (
    <Button
      variant="outline"
      color="blue"
      onClick={handleApplyPresetToAllCategories}
      disabled={isApplyingPreset || isDataLoading || !userMealPreset}
    >
      プリセット適用
    </Button>
  )
}

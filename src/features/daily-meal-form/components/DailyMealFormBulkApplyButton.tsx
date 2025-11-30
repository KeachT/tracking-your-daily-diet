import { Button, Center } from '@mantine/core'
import { useState } from 'react'

import { useUserMealPresetStore } from '../../../stores'
import { showNotification } from '../../../utils'
import { FormsType } from '../types'
import { applyPresetToAllCategories } from '../utils'

type DailyMealFormBulkApplyButtonProps = {
  forms: FormsType
}

export function DailyMealFormBulkApplyButton({
  forms,
}: DailyMealFormBulkApplyButtonProps) {
  const [isApplyingPreset, setIsApplyingPreset] = useState(false)
  const { userMealPreset } = useUserMealPresetStore()

  const handleApplyPresetToAll = () => {
    setIsApplyingPreset(true)
    if (!userMealPreset) {
      showNotification(
        'Day',
        'プリセットが読み込めませんでした',
        'error',
        setIsApplyingPreset
      )
      return
    }
    applyPresetToAllCategories(userMealPreset, forms)
    showNotification(
      'Day',
      'プリセットを全カテゴリへ適用しました',
      'success',
      setIsApplyingPreset
    )
  }

  return (
    <Center mt="xl">
      <Button
        variant="outline"
        color="blue"
        onClick={handleApplyPresetToAll}
        disabled={isApplyingPreset || !userMealPreset}
      >
        プリセット適用
      </Button>
    </Center>
  )
}

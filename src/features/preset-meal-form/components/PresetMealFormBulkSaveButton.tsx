import { Button } from '@mantine/core'
import { useState } from 'react'

import { UserMealPreset } from '../../../API'
import { showNotification } from '../../../utils'
import { FormsType } from '../types'
import { saveAllUserMealPreset } from '../utils'

type PresetMealFormBulkSaveButtonProps = {
  forms: FormsType
  userMealPreset: UserMealPreset | null
  setUserMealPreset: (preset: UserMealPreset) => void
}

export function PresetMealFormBulkSaveButton({
  forms,
  userMealPreset,
  setUserMealPreset,
}: PresetMealFormBulkSaveButtonProps) {
  const [isSavingPreset, setIsSavingPreset] = useState(false)

  const handleSaveAllPreset = async () => {
    setIsSavingPreset(true)
    try {
      await saveAllUserMealPreset(forms, userMealPreset, setUserMealPreset)
      showNotification(
        'Preset',
        '全カテゴリのプリセットを保存しました',
        'success',
        setIsSavingPreset,
      )
    } catch (err) {
      showNotification(
        'Preset',
        '全カテゴリのプリセットの保存に失敗しました',
        'error',
        setIsSavingPreset,
      )
    }
  }

  return (
    <Button
      variant="outline"
      color="teal"
      onClick={handleSaveAllPreset}
      disabled={isSavingPreset}
    >
      プリセット保存
    </Button>
  )
}

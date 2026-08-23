import { UserMealPreset } from '../../../API'
import {
  StatusButton,
  useStatusButtonState,
} from '../../../components/StatusButton'
import { SAVE_BUTTON_REENABLE_DELAY_MS } from '../../../constants'
import { FormsType } from '../types'
import { saveAllUserMealPreset } from '../utils'

type PresetMealFormBulkSaveButtonProps = {
  forms: FormsType
  userMealPreset: UserMealPreset | null
  upsertUserMealPreset: (preset: UserMealPreset) => void
}

export function PresetMealFormBulkSaveButton({
  forms,
  userMealPreset,
  upsertUserMealPreset,
}: PresetMealFormBulkSaveButtonProps) {
  const { saveStatus, startLoading, markSuccess, markError } =
    useStatusButtonState(SAVE_BUTTON_REENABLE_DELAY_MS)

  const handleSaveAllPreset = async () => {
    startLoading()
    try {
      await saveAllUserMealPreset(forms, userMealPreset, upsertUserMealPreset)
      markSuccess()
    } catch {
      markError()
    }
  }

  return (
    <StatusButton
      variant="outline"
      color="teal"
      onClick={handleSaveAllPreset}
      status={saveStatus}
      label="プリセット保存"
      statusLabels={{
        success: 'プリセット保存成功',
        error: 'プリセット保存失敗',
      }}
    />
  )
}

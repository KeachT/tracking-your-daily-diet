import {
  StatusButton,
  useStatusButtonState,
} from '../../../components/StatusButton'
import { SAVE_BUTTON_REENABLE_DELAY_MS } from '../../../constants'
import {
  useCurrentDateStore,
  useLoadingStateStore,
  useUserMealPresetStore,
} from '../../../stores'
import { createStringFromDate } from '../../../utils'
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import { createAppliedPresetValues, saveAndSetDailyMealRecord } from '../utils'

type DailyMealFormApplyPresetToAllCategoriesButtonProps = {
  forms: FormsType
}

export function DailyMealFormApplyPresetToAllCategoriesButton({
  forms,
}: DailyMealFormApplyPresetToAllCategoriesButtonProps) {
  const { saveStatus, startLoading, markSuccess, markError } =
    useStatusButtonState(SAVE_BUTTON_REENABLE_DELAY_MS)
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
    startLoading()
    if (!userMealPreset) {
      markError()
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
      markSuccess()
    } catch {
      markError()
    }
  }

  return (
    <StatusButton
      variant="outline"
      color="blue"
      onClick={handleApplyPresetToAllCategories}
      status={saveStatus}
      label="プリセット適用"
      statusLabels={{
        success: 'プリセット適用成功',
        error: 'プリセット適用失敗',
      }}
      disabled={isDataLoading || !userMealPreset}
    />
  )
}

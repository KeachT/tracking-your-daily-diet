import { Menu } from '@mantine/core'

import { UserMealPreset } from '../../../API'
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
import { createPresetLabel } from '../../preset-switcher'
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
  const userMealPresets = useUserMealPresetStore(
    (state) => state.userMealPresets,
  )
  const currentDateString = createStringFromDate(currentDate)

  const applyPreset = async (userMealPreset: UserMealPreset) => {
    startLoading()
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

  const buttonProps = {
    variant: 'outline' as const,
    color: 'blue',
    status: saveStatus,
    label: 'プリセット適用',
    statusLabels: {
      success: 'プリセット適用成功',
      error: 'プリセット適用失敗',
    },
    disabled: isDataLoading || userMealPresets.length === 0,
  }

  // With a single preset there is nothing to choose, so keep the original
  // one-click behaviour rather than making the user confirm through a menu.
  if (userMealPresets.length <= 1) {
    return (
      <StatusButton
        {...buttonProps}
        onClick={() => userMealPresets[0] && applyPreset(userMealPresets[0])}
      />
    )
  }

  return (
    <Menu shadow="md" position="bottom" withinPortal>
      <Menu.Target>
        <StatusButton {...buttonProps} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>適用するプリセット</Menu.Label>
        {userMealPresets.map((preset, index) => (
          <Menu.Item key={preset.id} onClick={() => applyPreset(preset)}>
            {createPresetLabel(preset, index)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}

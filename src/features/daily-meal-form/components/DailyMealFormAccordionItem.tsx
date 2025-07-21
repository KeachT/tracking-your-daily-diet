import { Accordion } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useState } from 'react'

import { fetchUserMealPreset } from '../../../api/user-meal-preset'
import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { NOTIFICATION_DISPLAY_DURATION_MS } from '../../../constants'
import { MealCategoryName } from '../../../models'
import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate, showNotification } from '../../../utils'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import {
  convertPresetToFormData,
  createFoodInitialValues,
  getPresetFoodsForCategory,
  saveAndSetDailyMealRecord,
} from '../utils'
import { DailyMealFormContent } from './DailyMealFormContent'

type MealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function DailyMealFormAccordionItem({
  mealCategoryName,
  forms,
}: MealFormAccordionItemProps) {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)
  const [isApplyPresetButtonDisabled, setIsApplyPresetButtonDisabled] =
    useState(false)
  const { dailyMealRecord, setDailyMealRecord } = useDailyMealRecordStore()
  const { currentDate } = useCurrentDateStore()
  const currentDateString = createStringFromDate(currentDate)

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = async () => {
    setIsSaveButtonDisabled(true)
    try {
      await saveAndSetDailyMealRecord(
        forms,
        currentDateString,
        dailyMealRecord || null,
        setDailyMealRecord
      )
      showNotification(
        'Day',
        `保存しました`,
        'success',
        setIsSaveButtonDisabled
      )
    } catch (err) {
      showNotification(
        'Day',
        `保存に失敗しました`,
        'error',
        setIsSaveButtonDisabled
      )
    }
  }

  const handleApplyPreset = async () => {
    setIsApplyPresetButtonDisabled(true)
    try {
      const userMealPreset = await fetchUserMealPreset()
      const presetFoods = getPresetFoodsForCategory(
        userMealPreset,
        mealCategoryName
      )
      if (presetFoods.length > 0) {
        const formData = convertPresetToFormData(presetFoods)
        forms.setFieldValue(mealCategoryName, formData)
        showNotification(
          'Day',
          `${MEAL_CATEGORY_LABELS[mealCategoryName]}のプリセットを適用しました`,
          'success',
          setIsApplyPresetButtonDisabled
        )
      } else {
        showNotification(
          'Day',
          `${MEAL_CATEGORY_LABELS[mealCategoryName]}のプリセットが見つかりません`,
          'error',
          setIsApplyPresetButtonDisabled
        )
      }
    } catch (err) {
      showNotification(
        'Day',
        `プリセットの適用に失敗しました`,
        'error',
        setIsApplyPresetButtonDisabled
      )
    }
  }

  return (
    <Accordion.Item value={mealCategoryName}>
      <Accordion.Control
        icon={<MealIcon mealCategoryName={mealCategoryName} />}
      >
        {MEAL_CATEGORY_LABELS[mealCategoryName]}
      </Accordion.Control>

      <Accordion.Panel>
        <DailyMealFormContent
          mealCategoryName={mealCategoryName}
          forms={forms}
        />
        <MealFormButtons
          onAdd={handleAdd}
          onSave={handleSave}
          onApplyPreset={handleApplyPreset}
          isSaveButtonDisabled={isSaveButtonDisabled}
          isApplyPresetButtonDisabled={isApplyPresetButtonDisabled}
        />
      </Accordion.Panel>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Accordion.Item>
  )
}

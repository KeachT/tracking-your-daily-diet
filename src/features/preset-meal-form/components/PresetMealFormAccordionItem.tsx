import { Accordion } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useState } from 'react'

import { MealCategoryName } from '@/API'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { NOTIFICATION_DISPLAY_DURATION_MS } from '../../../constants'
import { showNotification } from '../../../utils'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useUserMealPresetStore } from '../stores'
import { FormsType } from '../types'
import { createFoodInitialValues, saveUserMealPreset } from '../utils'
import { PresetMealFormContent } from './PresetMealFormContent'

type PresetMealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function PresetMealFormAccordionItem({
  mealCategoryName,
  forms,
}: PresetMealFormAccordionItemProps) {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)
  const { userMealPreset, setUserMealPreset } = useUserMealPresetStore()

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = async () => {
    setIsSaveButtonDisabled(true)
    try {
      await saveUserMealPreset(
        forms,
        mealCategoryName,
        userMealPreset,
        setUserMealPreset
      )
      showNotification(
        'Preset',
        `${MEAL_CATEGORY_LABELS[mealCategoryName]}を保存しました`,
        'success',
        setIsSaveButtonDisabled
      )
    } catch (err) {
      showNotification(
        'Preset',
        `${MEAL_CATEGORY_LABELS[mealCategoryName]}の保存に失敗しました`,
        'error',
        setIsSaveButtonDisabled
      )
    }
  }

  return (
    <Accordion.Item value={mealCategoryName}>
      <Accordion.Control
        icon={<MealIcon mealCategoryName={mealCategoryName} />}
      >
        {MEAL_CATEGORY_LABELS[mealCategoryName]}（プリセット）
      </Accordion.Control>

      <Accordion.Panel>
        <PresetMealFormContent
          mealCategoryName={mealCategoryName}
          forms={forms}
        />
        <MealFormButtons
          onAdd={handleAdd}
          onSave={handleSave}
          isSaveButtonDisabled={isSaveButtonDisabled}
        />
      </Accordion.Panel>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Accordion.Item>
  )
}

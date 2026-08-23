import { Accordion } from '@mantine/core'

import { MealCategoryName } from '@/constants'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import {
  selectSelectedUserMealPreset,
  useUserMealPresetStore,
} from '../../../stores'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { FormsType } from '../types'
import { createFoodInitialValues, saveAllUserMealPreset } from '../utils'
import { PresetMealFormContent } from './PresetMealFormContent'

type PresetMealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function PresetMealFormAccordionItem({
  mealCategoryName,
  forms,
}: PresetMealFormAccordionItemProps) {
  const userMealPreset = useUserMealPresetStore(selectSelectedUserMealPreset)
  const upsertUserMealPreset = useUserMealPresetStore(
    (state) => state.upsertUserMealPreset,
  )

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = () =>
    saveAllUserMealPreset(forms, userMealPreset, upsertUserMealPreset)

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
        <MealFormButtons onAdd={handleAdd} onSave={handleSave} />
      </Accordion.Panel>
    </Accordion.Item>
  )
}

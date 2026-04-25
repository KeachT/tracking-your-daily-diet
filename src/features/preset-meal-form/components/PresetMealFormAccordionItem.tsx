import { Accordion } from '@mantine/core'

import { MealCategoryName } from '@/constants'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { useUserMealPresetStore } from '../../../stores'
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
  const userMealPreset = useUserMealPresetStore((state) => state.userMealPreset)
  const setUserMealPreset = useUserMealPresetStore(
    (state) => state.setUserMealPreset,
  )

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = () =>
    saveAllUserMealPreset(forms, userMealPreset, setUserMealPreset)

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

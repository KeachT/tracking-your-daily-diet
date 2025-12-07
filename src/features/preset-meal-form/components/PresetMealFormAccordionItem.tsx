import { Accordion } from '@mantine/core'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { MealCategoryName } from '../../../models'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { FormsType } from '../types'
import { createFoodInitialValues } from '../utils'
import { PresetMealFormContent } from './PresetMealFormContent'

type PresetMealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function PresetMealFormAccordionItem({
  mealCategoryName,
  forms,
}: PresetMealFormAccordionItemProps) {
  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

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
        <MealFormButtons onAdd={handleAdd} />
      </Accordion.Panel>
    </Accordion.Item>
  )
}

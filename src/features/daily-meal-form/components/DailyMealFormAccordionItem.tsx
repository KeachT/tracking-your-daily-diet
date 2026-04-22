import { Accordion } from '@mantine/core'

import { MealCategoryName } from '@/constants'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate } from '../../../utils'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import { createFoodInitialValues, saveAndSetDailyMealRecord } from '../utils'
import { DailyMealFormContent } from './DailyMealFormContent'

type MealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function DailyMealFormAccordionItem({
  mealCategoryName,
  forms,
}: MealFormAccordionItemProps) {
  const dailyMealRecord = useDailyMealRecordStore(
    (state) => state.dailyMealRecord,
  )
  const setDailyMealRecord = useDailyMealRecordStore(
    (state) => state.setDailyMealRecord,
  )
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const currentDateString = createStringFromDate(currentDate)

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = () =>
    saveAndSetDailyMealRecord(
      forms,
      currentDateString,
      dailyMealRecord || null,
      setDailyMealRecord,
    )

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
        <MealFormButtons onAdd={handleAdd} onSave={handleSave} />
      </Accordion.Panel>
    </Accordion.Item>
  )
}

import { Accordion } from '@mantine/core'

import { MealCategoryName } from '@/constants'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { useStatusButtonState } from '../../../components/StatusButton'
import { SAVE_BUTTON_REENABLE_DELAY_MS } from '../../../constants'
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
  const { saveStatus, startLoading, markSuccess, markError } =
    useStatusButtonState(SAVE_BUTTON_REENABLE_DELAY_MS)
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

  const handleSave = async () => {
    startLoading()
    try {
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
          isSaveButtonDisabled={saveStatus === 'loading'}
          saveStatus={saveStatus}
        />
      </Accordion.Panel>
    </Accordion.Item>
  )
}

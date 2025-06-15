import { Accordion } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useState } from 'react'

import { MealCategoryName } from '@/API'

import { MealFormButtons } from '../../../components/MealFormButtons'
import { MealIcon } from '../../../components/MealIcon'
import { NOTIFICATION_DISPLAY_DURATION_MS } from '../../../constants'
import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate, showNotification } from '../../../utils'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useDailyMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import {
  createFoodInitialValues,
  saveAndSetDailyMealRecordsArray,
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
  const { dailyMealRecords, setDailyMealRecords } = useDailyMealRecordsStore()
  const { currentDate } = useCurrentDateStore()
  const currentDateString = createStringFromDate(currentDate)

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = async () => {
    setIsSaveButtonDisabled(true)
    try {
      const currentDailyMealRecord = dailyMealRecords.find(
        (record) => record.date === currentDateString
      )
      await saveAndSetDailyMealRecordsArray(
        forms,
        currentDateString,
        currentDailyMealRecord || null,
        setDailyMealRecords,
        dailyMealRecords
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
          isSaveButtonDisabled={isSaveButtonDisabled}
        />
      </Accordion.Panel>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Accordion.Item>
  )
}

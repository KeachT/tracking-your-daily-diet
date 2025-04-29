import { Accordion, Button, Center } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useState } from 'react'

import { MealCategoryName } from '@/API'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { MealIcon } from '../../../components/MealIcon'
import { NoFoodText } from '../../../components/NoFoodText'
import { NOTIFICATION_DISPLAY_DURATION_MS } from '../../../constants'
import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate, showNotification } from '../../../utils'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import { createFoodInitialValues, saveAndSetMealRecord } from '../utils'
import { MealFormFields } from './MealFormFields'

type MealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
  isLoading?: boolean
}

export function MealFormAccordionItem({
  mealCategoryName,
  forms,
  isLoading = true,
}: MealFormAccordionItemProps) {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)
  const { mealRecords, setMealRecords } = useMealRecordsStore()
  const { currentDate } = useCurrentDateStore()
  const currentDateString = createStringFromDate(currentDate)

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = async () => {
    setIsSaveButtonDisabled(true)
    try {
      await saveAndSetMealRecord(
        forms,
        mealCategoryName,
        currentDateString,
        mealRecords,
        setMealRecords
      )
      showNotification(
        'Day',
        `${MEAL_CATEGORY_LABELS[mealCategoryName]}を保存しました`,
        'success',
        setIsSaveButtonDisabled
      )
    } catch (err) {
      showNotification(
        'Day',
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
        {MEAL_CATEGORY_LABELS[mealCategoryName]}
      </Accordion.Control>

      <Accordion.Panel>
        {isLoading ? (
          <LoadingSkeleton height={100} />
        ) : forms.values[mealCategoryName]?.length > 0 ? (
          <MealFormFields form={forms} mealCategoryName={mealCategoryName} />
        ) : (
          <NoFoodText />
        )}
        <Center mt="xl">
          <Button mr="md" onClick={handleAdd}>
            追加
          </Button>
          <Button
            color="teal"
            onClick={handleSave}
            disabled={isSaveButtonDisabled}
          >
            保存
          </Button>
        </Center>
      </Accordion.Panel>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Accordion.Item>
  )
}

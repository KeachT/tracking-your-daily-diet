import { Accordion, Button, Center } from '@mantine/core'
import { Notifications, notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import { MealCategoryName } from '@/API'

import { MealIcon } from '../../../components/MealIcon'
import { NoFoodText } from '../../../components/NoFoodText'
import {
  NOTIFICATION_DISPLAY_DURATION_MS,
  SAVE_BUTTON_REENABLE_DELAY_MS,
} from '../../../constants'
import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate } from '../../../utils'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import { createFoodInitialValues, saveAndSetMealRecord } from '../utils'
import { MealFormFields } from './MealFormFields'

type MealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function MealFormAccordionItem({
  mealCategoryName,
  forms,
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
      handleSuccess()
    } catch (err) {
      handleError()
    }
  }

  const handleSuccess = () => {
    notifications.show({
      title: 'Saved!',
      message: 'Day',
      color: 'green',
      icon: <IconCheck />,
    })
    setTimeout(
      () => setIsSaveButtonDisabled(false),
      SAVE_BUTTON_REENABLE_DELAY_MS
    )
  }

  const handleError = () => {
    notifications.show({
      title: 'Error!',
      message: 'Day',
      color: 'red',
      icon: <IconX />,
    })
    setTimeout(
      () => setIsSaveButtonDisabled(false),
      SAVE_BUTTON_REENABLE_DELAY_MS
    )
  }

  return (
    <Accordion.Item value={mealCategoryName}>
      <Accordion.Control
        icon={<MealIcon mealCategoryName={mealCategoryName} />}
      >
        {MEAL_CATEGORY_LABELS[mealCategoryName]}
      </Accordion.Control>

      <Accordion.Panel>
        {forms.values[mealCategoryName]?.length > 0 ? (
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

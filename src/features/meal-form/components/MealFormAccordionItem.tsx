import { Accordion, Button, Center } from '@mantine/core'
import { Notifications, notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import {
  NOTIFICATION_DISPLAY_DURATION_MS,
  SAVE_BUTTON_REENABLE_DELAY_MS,
} from '../../../constants'
import { useCurrentDateStore } from '../../../stores'
import { createStringFromDate } from '../../../utils'
import { useMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import { createFoodInitialValues, saveMealRecord } from '../utils'
import { MealFormFields } from './MealFormFields'
import { MealIcon } from './MealIcon'
import { NoFoodText } from './NoFoodText'

type MealFormAccordionItemProps = {
  mealCategoryName: string
  forms: FormsType
}

export function MealFormAccordionItem({
  mealCategoryName,
  forms,
}: MealFormAccordionItemProps) {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)
  const { mealRecords } = useMealRecordsStore()
  const { currentDate } = useCurrentDateStore()
  const currentDateString = createStringFromDate(currentDate)

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = async () => {
    setIsSaveButtonDisabled(true)
    try {
      await saveMealRecord(
        forms,
        mealCategoryName,
        currentDateString,
        mealRecords
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
        {mealCategoryName}
      </Accordion.Control>

      <Accordion.Panel>
        {forms.values[mealCategoryName]?.length > 0 ? (
          <MealFormFields form={forms} mealCategoryName={mealCategoryName} />
        ) : (
          <NoFoodText />
        )}
        <Center mt="xl">
          <Button mr="md" onClick={handleAdd}>
            Add
          </Button>
          <Button
            color="teal"
            onClick={handleSave}
            disabled={isSaveButtonDisabled}
          >
            Save
          </Button>
        </Center>
      </Accordion.Panel>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Accordion.Item>
  )
}

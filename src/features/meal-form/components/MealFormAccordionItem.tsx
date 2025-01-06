import { Accordion, Button, Center } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'

import { DialogSaved } from '../../../components/DialogSaved'
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
  const [opened, { open, close }] = useDisclosure(false)
  const { mealRecords } = useMealRecordsStore()
  const { currentDate } = useCurrentDateStore()
  const currentDateString = createStringFromDate(currentDate)

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = () => {
    open()
    saveMealRecord(forms, mealCategoryName, currentDateString, mealRecords)
  }

  useEffect(() => {
    opened && setTimeout(() => close(), 3000)
  }, [opened, close])

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
          <Button onClick={handleAdd} mr="md">
            Add
          </Button>
          <Button onClick={handleSave} color="teal">
            Save
          </Button>
        </Center>
      </Accordion.Panel>

      {opened && <DialogSaved opened={opened} close={close} />}
    </Accordion.Item>
  )
}

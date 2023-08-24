import { Accordion, Button, Center } from '@mantine/core'
import { createFoodInitialValues } from '../utils'
import { FormsType } from '../types'

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
  const handleAddFood = () => {
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())
  }

  return (
    <Accordion.Item value={mealCategoryName}>
      <Accordion.Control
        icon={<MealIcon mealCategoryName={mealCategoryName} />}
      >
        {mealCategoryName}
      </Accordion.Control>
      <Accordion.Panel>
        {forms.values[mealCategoryName].length > 0 ? (
          <MealFormFields form={forms} mealCategoryName={mealCategoryName} />
        ) : (
          <NoFoodText />
        )}
        <Center mt="xl">
          <Button onClick={handleAddFood}>Add Food</Button>
        </Center>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

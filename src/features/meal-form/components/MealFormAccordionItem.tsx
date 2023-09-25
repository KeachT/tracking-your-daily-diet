import { Accordion, Button, Center } from '@mantine/core'

import { useMealCategoriesStore } from '../../../stores/mealCategories'
import { useMealDateStore } from '../../../stores/mealDate'
import { FormsType } from '../types'
import { createFoodInitialValues, saveFoods } from '../utils'
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
  const { mealDate, setMealDate } = useMealDateStore()
  const { mealCategories, setMealCategories } = useMealCategoriesStore()

  const handleSave = () =>
    saveFoods(
      mealCategoryName,
      forms,
      mealDate,
      setMealDate,
      mealCategories,
      setMealCategories
    )

  const handleAdd = () => {
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
    </Accordion.Item>
  )
}

import { useForm, UseFormReturnType } from '@mantine/form'
import { Accordion, Button, Group } from '@mantine/core'
import { MealFormFields } from './MealFormFields'
import { FormData } from './types'
import { MealIcon } from './MealIcon'
import { NoFoodText } from './NoFoodText'
import { createFoodInitialValues } from './utils'

interface MealFormAccordionItemProps {
  mealCategoryName: string
}

export function MealFormAccordionItem({
  mealCategoryName,
}: MealFormAccordionItemProps) {
  const form: UseFormReturnType<FormData, (values: FormData) => FormData> =
    useForm({
      initialValues: {
        [mealCategoryName]: [createFoodInitialValues()],
      },
    })

  const handleAddFood = () => {
    form.insertListItem(`${mealCategoryName}`, createFoodInitialValues())
  }

  return (
    <Accordion.Item value={mealCategoryName}>
      <Accordion.Control
        icon={<MealIcon mealCategoryName={mealCategoryName} />}
      >
        {mealCategoryName}
      </Accordion.Control>
      <Accordion.Panel>
        {form.values[mealCategoryName].length > 0 ? (
          <MealFormFields form={form} mealCategoryName={mealCategoryName} />
        ) : (
          <NoFoodText />
        )}
        <Group position="center" mt="md">
          <Button onClick={handleAddFood}>Add Food</Button>
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  )
}

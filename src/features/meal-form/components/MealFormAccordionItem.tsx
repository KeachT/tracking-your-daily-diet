import { Accordion, Button, Center, Dialog, Group, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconCircleCheck } from '@tabler/icons-react'
import { useEffect } from 'react'

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
  const [opened, { open, close }] = useDisclosure(false)

  const handleSave = () =>
    saveFoods(
      mealCategoryName,
      forms,
      mealDate,
      setMealDate,
      mealCategories,
      setMealCategories,
      open
    )

  const handleAdd = () => {
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())
  }

  useEffect(() => {
    opened &&
      setTimeout(() => {
        close()
      }, 3000)
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

      {opened && (
        <Dialog opened={opened} onClose={close} withBorder>
          <Group>
            <IconCircleCheck size={30} strokeWidth={2.5} color="teal" />
            <Text>Saved!</Text>
          </Group>
        </Dialog>
      )}
    </Accordion.Item>
  )
}

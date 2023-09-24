import { Accordion, Button, Center } from '@mantine/core'
import { diff } from 'radash'

import { useMealCategoriesStore } from '../../../stores/mealCategories'
import { useMealDateStore } from '../../../stores/mealDate'
import { FormsType } from '../types'
import {
  createFoodInitialValues,
  createFoods,
  deleteFoods,
  fetchMealDate,
  updateFoods,
} from '../utils'
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

  const targetFormValues = forms.values[mealCategoryName]
  const targetFormValuesFoodIds = targetFormValues?.map(
    (targetFormValue) => targetFormValue?.id
  )

  const targetMealCategory = mealCategories.find(
    (mealCategory: any) => mealCategory?.name === mealCategoryName
  )
  const targetMealCategoryFoods = mealCategories.find(
    (mealCategory: any) => mealCategory?.name === mealCategoryName
  )?.foods?.items
  const targetMealCategoriesFoodIds = targetMealCategoryFoods?.map(
    (targetMealCategory: any) => targetMealCategory?.id
  )

  const createFoodIds = diff(
    targetFormValuesFoodIds,
    targetMealCategoriesFoodIds
  )
  const deleteFoodIds = diff(
    targetMealCategoriesFoodIds,
    targetFormValuesFoodIds
  )
  const updateFoodIds = targetFormValuesFoodIds?.filter(
    (id) => !createFoodIds.includes(id) && !deleteFoodIds.includes(id)
  )

  const createTargetFoods = targetFormValues?.filter((formValue) =>
    createFoodIds.includes(formValue.id)
  )
  const deleteTargetFoods = targetMealCategoryFoods?.filter(
    (targetMealCategoryFood: any) =>
      deleteFoodIds.includes(targetMealCategoryFood.id)
  )
  const updateTargetFoods = targetFormValues?.filter((formValue) =>
    updateFoodIds.includes(formValue.id)
  )

  const handleAdd = () => {
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())
  }

  const handleSave = () => {
    if (createTargetFoods.length > 0) {
      createFoods(createTargetFoods, targetMealCategory.id)
    }
    if (deleteTargetFoods.length > 0) {
      deleteFoods(deleteTargetFoods)
    }
    if (updateTargetFoods.length > 0) {
      updateFoods(updateTargetFoods)
    }
    fetchMealDate(mealDate?.id, setMealDate, setMealCategories)
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

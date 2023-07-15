import { Accordion } from '@mantine/core'
import { MealCategoryName } from '@/API'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  return (
    <Accordion defaultValue={mealCategoryNames[0]} variant="separated">
      {mealCategoryNames.map((mealCategoryName) => (
        <MealFormAccordionItem
          key={mealCategoryName}
          mealCategoryName={mealCategoryName}
        />
      ))}
    </Accordion>
  )
}

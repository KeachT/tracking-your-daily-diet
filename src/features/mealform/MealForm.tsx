import { Accordion, Box } from '@mantine/core'
import { MealCategoryName } from '@/API'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  return (
    <div>
      <Box maw={700}>
        <Accordion defaultValue={mealCategoryNames[0]} variant="separated">
          {mealCategoryNames.map((mealCategoryName) => (
            <MealFormAccordionItem
              key={mealCategoryName}
              mealCategoryName={mealCategoryName}
            />
          ))}
        </Accordion>
      </Box>
    </div>
  )
}

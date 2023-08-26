import { useEffect } from 'react'
import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { MealCategoryName } from '@/API'
import { sum } from 'radash'

import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { createFoodInitialValues, createSumValuesAry } from '../utils'
import { FormsType } from '../types'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const {
    setDailyCalories,
    setDailyProtein,
    setDailyFat,
    setDailyCarbohydrates,
  } = useNutritionNumbersStore()

  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  const forms: FormsType = useForm({
    initialValues: Object.fromEntries(
      mealCategoryNames.map((name) => [name, [createFoodInitialValues()]])
    ),
  })

  const sumValuesAry = createSumValuesAry(forms)
  const newDailyCalories = sum(sumValuesAry, (f) => f.sumCalories)
  const newDailyProtein = sum(sumValuesAry, (f) => f.sumProtein)
  const newDailyFat = sum(sumValuesAry, (f) => f.sumFat)
  const newDailyCarbohydrates = sum(sumValuesAry, (f) => f.sumCarbohydrates)

  useEffect(() => {
    setDailyCalories(newDailyCalories)
  }, [newDailyCalories, setDailyCalories])

  useEffect(() => {
    setDailyProtein(newDailyProtein)
  }, [newDailyProtein, setDailyProtein])

  useEffect(() => {
    setDailyFat(newDailyFat)
  }, [newDailyFat, setDailyFat])

  useEffect(() => {
    setDailyCarbohydrates(newDailyCarbohydrates)
  }, [newDailyCarbohydrates, setDailyCarbohydrates])

  return (
    <Accordion defaultValue={mealCategoryNames[0]} variant="separated">
      {mealCategoryNames.map((mealCategoryName) => (
        <MealFormAccordionItem
          key={mealCategoryName}
          mealCategoryName={mealCategoryName}
          forms={forms}
        />
      ))}
    </Accordion>
  )
}

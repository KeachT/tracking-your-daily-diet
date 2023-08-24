import { useEffect } from 'react'
import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { MealCategoryName } from '@/API'
import { sum } from 'radash'

import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { createFoodInitialValues } from '../utils'
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
    initialValues: {
      [mealCategoryNames[0]]: [createFoodInitialValues()],
      [mealCategoryNames[1]]: [createFoodInitialValues()],
      [mealCategoryNames[2]]: [createFoodInitialValues()],
      [mealCategoryNames[3]]: [createFoodInitialValues()],
    },
  })

  const formValuesObj = forms.values
  const formValuesAry = Object.keys(formValuesObj).map((key) => {
    const formValue = formValuesObj[key]

    const sumCalories = sum(formValue, (f) => Number(f.calories))
    const sumProtein = sum(formValue, (f) => Number(f.protein))
    const sumFat = sum(formValue, (f) => Number(f.fat))
    const sumCarbohydrates = sum(formValue, (f) => Number(f.carbohydrates))

    return { sumCalories, sumProtein, sumFat, sumCarbohydrates }
  })

  const newDailyCalories = sum(formValuesAry, (f) => f.sumCalories)
  const newDailyProtein = sum(formValuesAry, (f) => f.sumProtein)
  const newDailyFat = sum(formValuesAry, (f) => f.sumFat)
  const newDailyCarbohydrates = sum(formValuesAry, (f) => f.sumCarbohydrates)

  useEffect(
    () => setDailyCalories(newDailyCalories),
    [newDailyCalories, setDailyCalories]
  )
  useEffect(
    () => setDailyProtein(newDailyProtein),
    [newDailyProtein, setDailyProtein]
  )
  useEffect(() => setDailyFat(newDailyFat), [newDailyFat, setDailyFat])
  useEffect(
    () => setDailyCarbohydrates(newDailyCarbohydrates),
    [newDailyCarbohydrates, setDailyCarbohydrates]
  )

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

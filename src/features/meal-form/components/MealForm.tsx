import { Accordion, Dialog } from '@mantine/core'
import { useForm } from '@mantine/form'
import { sum } from 'radash'
import { useEffect } from 'react'

import { MealCategoryName } from '@/API'

import { useCurrentDateStore } from '../../../stores/currentDate'
import { useMealCategoriesStore } from '../../../stores/mealCategories'
import { useMealDateStore } from '../../../stores/mealDate'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { fetchMealDates } from '../api'
import { FormsType } from '../types'
import { createFoodInitialValues, createSumValuesAry } from '../utils'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const { currentDate } = useCurrentDateStore()
  const { setMealDate } = useMealDateStore()
  const { mealCategories, setMealCategories } = useMealCategoriesStore()

  const currentDateString = currentDate?.toISOString()?.split('T')?.[0] || ''
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  const forms: FormsType = useForm({
    initialValues: Object.fromEntries(
      mealCategoryNames.map((name) => [name, [createFoodInitialValues()]])
    ),
  })

  useEffect(() => {
    const initialFormValues = Object.fromEntries(
      mealCategoryNames.map((mealCategoryName) => {
        const mealCategoryFoods = mealCategories.find(
          (mealCategory: any) => mealCategory?.name === mealCategoryName
        )?.foods?.items

        return [
          mealCategoryName,
          mealCategoryFoods ? mealCategoryFoods : [createFoodInitialValues()],
        ]
      })
    )

    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [mealCategories])

  const sumValuesAry = createSumValuesAry(forms)
  const newDailyCalories = sum(sumValuesAry, (f) => f.sumCalories)
  const newDailyProtein = sum(sumValuesAry, (f) => f.sumProtein)
  const newDailyFat = sum(sumValuesAry, (f) => f.sumFat)
  const newDailyCarbohydrates = sum(sumValuesAry, (f) => f.sumCarbohydrates)

  const {
    setDailyCalories,
    setDailyProtein,
    setDailyFat,
    setDailyCarbohydrates,
  } = useNutritionNumbersStore()

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

  useEffect(() => {
    fetchMealDates(currentDateString, setMealDate, setMealCategories)
  }, [currentDateString, setMealDate, setMealCategories])

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

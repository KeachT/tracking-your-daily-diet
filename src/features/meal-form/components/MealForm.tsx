import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { sum } from 'radash'
import { useEffect } from 'react'

import { MealCategoryName } from '@/API'

import { useCurrentDateStore } from '../../../stores/currentDate'
import { useMealCategoriesStore } from '../../../stores/mealCategories'
import { useMealDateStore } from '../../../stores/mealDate'
import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { createStringFromDate } from '../../../utils/createStringFromDate'
import { fetchMealDates } from '../api'
import { FormsType } from '../types'
import {
  createFoodInitialValues,
  createInitialFormValues,
  createSumNutritionValues,
} from '../utils'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const { currentDate } = useCurrentDateStore()
  const { setMealDate } = useMealDateStore()
  const { mealCategories, setMealCategories } = useMealCategoriesStore()

  const currentDateString = createStringFromDate(currentDate)
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  const forms: FormsType = useForm({
    initialValues: Object.fromEntries(
      mealCategoryNames.map((name) => [name, [createFoodInitialValues()]])
    ),
  })

  useEffect(() => {
    const initialFormValues = createInitialFormValues(
      mealCategoryNames,
      mealCategories
    )

    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [mealCategories])

  const sumNutritionValues = createSumNutritionValues(forms)
  const newDailyCalories = sum(sumNutritionValues, (f) => f.sumCalories)
  const newDailyProtein = sum(sumNutritionValues, (f) => f.sumProtein)
  const newDailyFat = sum(sumNutritionValues, (f) => f.sumFat)
  const newDailyCarbohydrates = sum(
    sumNutritionValues,
    (f) => f.sumCarbohydrates
  )

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

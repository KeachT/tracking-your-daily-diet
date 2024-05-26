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
import { createInitialFormValues, createSumNutritionValues } from '../utils'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const { currentDate } = useCurrentDateStore()
  const { setMealDate } = useMealDateStore()
  const { mealCategories, setMealCategories } = useMealCategoriesStore()
  const {
    setDailyCalories,
    setDailyProtein,
    setDailyFat,
    setDailyCarbohydrates,
  } = useNutritionNumbersStore()

  const currentDateString = createStringFromDate(currentDate)
  const mealCategoryNames: string[] = Object.values(MealCategoryName)
  const forms: FormsType = useForm({})

  const sumNutritionValues = createSumNutritionValues(forms)
  const sumDailyCalories = sum(sumNutritionValues, (f) => f.sumCalories)
  const sumDailyProtein = sum(sumNutritionValues, (f) => f.sumProtein)
  const sumDailyFat = sum(sumNutritionValues, (f) => f.sumFat)
  const sumDailyCarbohydrates = sum(
    sumNutritionValues,
    (f) => f.sumCarbohydrates
  )

  const roundedDailyProtein = Math.round(sumDailyProtein * 100) / 100
  const roundedDailyFat = Math.round(sumDailyFat * 100) / 100
  const roundedDailyCarbohydrates =
    Math.round(sumDailyCarbohydrates * 100) / 100

  useEffect(() => {
    const initialFormValues = createInitialFormValues(mealCategories)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [mealCategories])

  useEffect(() => {
    setDailyCalories(sumDailyCalories)
  }, [sumDailyCalories, setDailyCalories])

  useEffect(() => {
    setDailyProtein(roundedDailyProtein)
  }, [roundedDailyProtein, setDailyProtein])

  useEffect(() => {
    setDailyFat(roundedDailyFat)
  }, [roundedDailyFat, setDailyFat])

  useEffect(() => {
    setDailyCarbohydrates(roundedDailyCarbohydrates)
  }, [roundedDailyCarbohydrates, setDailyCarbohydrates])

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

import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '@/API'

import { useCurrentDateStore, useNutritionNumbersStore } from '../../../stores'
import { createStringFromDate, roundToTwoDecimalPlaces } from '../../../utils'
import { useMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import {
  createInitialFormValues,
  createSumNutritionValues,
  fetchAndSetMealRecords,
  getDefaultCategory,
} from '../utils'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const { currentDate } = useCurrentDateStore()
  const { mealRecords, setMealRecords } = useMealRecordsStore()
  const {
    setDailyCalories,
    setDailyProtein,
    setDailyFat,
    setDailyCarbohydrates,
  } = useNutritionNumbersStore()

  const mealCategoryNames = Object.values(
    MealCategoryName
  ) as MealCategoryName[]

  const currentDateString = createStringFromDate(currentDate)
  const defaultCategory = getDefaultCategory()
  const forms: FormsType = useForm({})
  const {
    sumDailyCalories,
    sumDailyProtein,
    sumDailyFat,
    sumDailyCarbohydrates,
  } = createSumNutritionValues(forms)

  useEffect(() => {
    const initialFormValues = createInitialFormValues(mealRecords)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [mealRecords])

  useEffect(() => {
    fetchAndSetMealRecords(currentDateString, setMealRecords)
  }, [currentDateString, setMealRecords])

  useEffect(() => {
    setDailyCalories(roundToTwoDecimalPlaces(sumDailyCalories))
  }, [sumDailyCalories, setDailyCalories])

  useEffect(() => {
    setDailyProtein(roundToTwoDecimalPlaces(sumDailyProtein))
  }, [sumDailyProtein, setDailyProtein])

  useEffect(() => {
    setDailyFat(roundToTwoDecimalPlaces(sumDailyFat))
  }, [sumDailyFat, setDailyFat])

  useEffect(() => {
    setDailyCarbohydrates(roundToTwoDecimalPlaces(sumDailyCarbohydrates))
  }, [sumDailyCarbohydrates, setDailyCarbohydrates])

  return (
    <Accordion defaultValue={defaultCategory} variant="separated">
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

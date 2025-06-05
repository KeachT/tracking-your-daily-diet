import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '@/API'

import {
  useCurrentDateStore,
  useLoadingStateStore,
  useNutritionNumbersStore,
} from '../../../stores'
import { createStringFromDate, roundToTwoDecimalPlaces } from '../../../utils'
import { useDailyMealRecordsStore, useMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import {
  createInitialFormValues,
  createSumNutritionValues,
  getDefaultCategory,
  loadDailyMealRecords,
  loadMealRecords,
} from '../utils'
import { DailyMealFormAccordionItem } from './DailyMealFormAccordionItem'

export function DailyMealForm() {
  const { currentDate } = useCurrentDateStore()
  const { setIsDataLoading } = useLoadingStateStore()
  const { mealRecords, setMealRecords } = useMealRecordsStore()
  const { dailyMealRecords, setDailyMealRecords } = useDailyMealRecordsStore()
  const {
    setDailyCalories,
    setDailyProtein,
    setDailyFat,
    setDailyCarbohydrates,
  } = useNutritionNumbersStore()

  const forms: FormsType = useForm({})
  const mealCategoryNames = Object.values(
    MealCategoryName
  ) as MealCategoryName[]

  const currentDateString = createStringFromDate(currentDate)
  const defaultCategory = getDefaultCategory()
  const { sumCalories, sumProtein, sumFat, sumCarbohydrates } =
    createSumNutritionValues(forms)

  useEffect(() => {
    const initialFormValues = createInitialFormValues(mealRecords)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [mealRecords])

  useEffect(() => {
    loadMealRecords(currentDateString, setMealRecords, setIsDataLoading)
  }, [currentDateString, setMealRecords, setIsDataLoading])

  useEffect(() => {
    loadDailyMealRecords(
      currentDateString,
      setDailyMealRecords,
      setIsDataLoading
    )
  }, [currentDateString, setDailyMealRecords, setIsDataLoading])

  useEffect(() => {
    setDailyCalories(roundToTwoDecimalPlaces(sumCalories))
    setDailyProtein(roundToTwoDecimalPlaces(sumProtein))
    setDailyFat(roundToTwoDecimalPlaces(sumFat))
    setDailyCarbohydrates(roundToTwoDecimalPlaces(sumCarbohydrates))
    // eslint-disable-next-line
  }, [sumCalories, sumProtein, sumFat, sumCarbohydrates])

  return (
    <Accordion defaultValue={defaultCategory} variant="separated">
      {mealCategoryNames.map((mealCategoryName) => (
        <DailyMealFormAccordionItem
          key={mealCategoryName}
          mealCategoryName={mealCategoryName}
          forms={forms}
        />
      ))}
    </Accordion>
  )
}

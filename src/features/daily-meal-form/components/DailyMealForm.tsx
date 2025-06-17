import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '../../../models'
import {
  useCurrentDateStore,
  useLoadingStateStore,
  useNutritionNumbersStore,
} from '../../../stores'
import { createStringFromDate, roundToTwoDecimalPlaces } from '../../../utils'
import { useDailyMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import {
  createDailyMealRecordInitialValues,
  createSumNutritionValues,
  getDefaultCategory,
  loadDailyMealRecords,
} from '../utils'
import { DailyMealFormAccordionItem } from './DailyMealFormAccordionItem'

export function DailyMealForm() {
  const { currentDate } = useCurrentDateStore()
  const { setIsDataLoading } = useLoadingStateStore()
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
    // initialize the form values with the current daily meal record
    const currentDailyMealRecord = dailyMealRecords.find(
      (record) => record.date === currentDateString
    )
    const initialFormValues = createDailyMealRecordInitialValues(
      currentDailyMealRecord
    )
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [dailyMealRecords, currentDateString])

  useEffect(() => {
    // Load daily meal records when the component mounts or when the current date changes
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

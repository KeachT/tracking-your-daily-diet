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
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import {
  createDailyMealRecordInitialValues,
  createSumNutritionValues,
  getDefaultCategory,
  loadDailyMealRecord,
} from '../utils'
import { DailyMealFormAccordionItem } from './DailyMealFormAccordionItem'

export function DailyMealForm() {
  const { currentDate } = useCurrentDateStore()
  const { setIsDataLoading } = useLoadingStateStore()
  const { dailyMealRecord, setDailyMealRecord } = useDailyMealRecordStore()
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
    const initialFormValues =
      createDailyMealRecordInitialValues(dailyMealRecord)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [dailyMealRecord, currentDateString])

  useEffect(() => {
    // Load daily meal records when the component mounts or when the current date changes
    loadDailyMealRecord(currentDateString, setDailyMealRecord, setIsDataLoading)
  }, [currentDateString, setDailyMealRecord, setIsDataLoading])

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

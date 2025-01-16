import { Accordion, Box, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { sum } from 'radash'
import { useEffect } from 'react'

import { MealCategoryName } from '@/API'

import { useCurrentDateStore, useNutritionNumbersStore } from '../../../stores'
import { createStringFromDate, roundToTwoDecimalPlaces } from '../../../utils'
import { fetchMealRecords } from '../api'
import { useMealRecordsStore } from '../stores'
import { FormsType } from '../types'
import { createInitialFormValues, createSumNutritionValues } from '../utils'
import { MealFormAccordionItem } from './MealFormAccordionItem'

export function MealForm() {
  const {
    setDailyCalories,
    setDailyProtein,
    setDailyFat,
    setDailyCarbohydrates,
  } = useNutritionNumbersStore()
  const { mealRecords, setMealRecords } = useMealRecordsStore()
  const { currentDate } = useCurrentDateStore()
  const currentDateString = createStringFromDate(currentDate)

  const forms: FormsType = useForm({})
  const mealCategoryNames: string[] = Object.values(MealCategoryName)

  const sumNutritionValues = createSumNutritionValues(forms)
  const sumDailyCalories = sum(sumNutritionValues, (f) => f.sumCalories)
  const sumDailyProtein = sum(sumNutritionValues, (f) => f.sumProtein)
  const sumDailyFat = sum(sumNutritionValues, (f) => f.sumFat)
  const sumDailyCarbohydrates = sum(
    sumNutritionValues,
    (f) => f.sumCarbohydrates
  )

  useEffect(() => {
    const initialFormValues = createInitialFormValues(mealRecords)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [mealRecords])

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

  useEffect(() => {
    fetchMealRecords(currentDateString, setMealRecords)
  }, [currentDateString, setMealRecords])

  return (
    <Box>
      <Text fw={200} size="xl" mb={10}>
        Daily Meals
      </Text>

      <Accordion defaultValue={mealCategoryNames[0]} variant="separated">
        {mealCategoryNames.map((mealCategoryName) => (
          <MealFormAccordionItem
            key={mealCategoryName}
            mealCategoryName={mealCategoryName}
            forms={forms}
          />
        ))}
      </Accordion>
    </Box>
  )
}

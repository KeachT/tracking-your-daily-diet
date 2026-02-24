import { Accordion, Box, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '@/constants'

import {
  useCurrentDateStore,
  useLoadingStateStore,
  useNutritionNumbersStore,
  useUserMealPresetStore,
} from '../../../stores'
import { createStringFromDate, roundToTwoDecimalPlaces } from '../../../utils'
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import {
  createDailyMealRecordInitialValues,
  createSumNutritionValues,
  getDefaultCategory,
  loadDailyMealRecord,
  loadUserMealPresetForDay,
} from '../utils'
import { DailyMealFormAccordionItem } from './DailyMealFormAccordionItem'
import { DailyMealFormApplyPresetToAllCategoriesButton } from './DailyMealFormApplyPresetToAllCategoriesButton'

export function DailyMealForm() {
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const setIsDataLoading = useLoadingStateStore(
    (state) => state.setIsDataLoading,
  )
  const dailyMealRecord = useDailyMealRecordStore(
    (state) => state.dailyMealRecord,
  )
  const setDailyMealRecord = useDailyMealRecordStore(
    (state) => state.setDailyMealRecord,
  )
  const setUserMealPreset = useUserMealPresetStore(
    (state) => state.setUserMealPreset,
  )
  const setDailyCalories = useNutritionNumbersStore(
    (state) => state.setDailyCalories,
  )
  const setDailyProtein = useNutritionNumbersStore(
    (state) => state.setDailyProtein,
  )
  const setDailyFat = useNutritionNumbersStore((state) => state.setDailyFat)
  const setDailyCarbohydrates = useNutritionNumbersStore(
    (state) => state.setDailyCarbohydrates,
  )

  const forms: FormsType = useForm({})
  const mealCategoryNames = Object.values(
    MealCategoryName,
  ) as MealCategoryName[]
  const currentDateString = createStringFromDate(currentDate)
  const defaultCategory = getDefaultCategory()
  const { sumCalories, sumProtein, sumFat, sumCarbohydrates } =
    createSumNutritionValues(forms)

  useEffect(() => {
    const initialFormValues =
      createDailyMealRecordInitialValues(dailyMealRecord)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [dailyMealRecord, currentDateString])

  useEffect(() => {
    const loadAll = async () => {
      setIsDataLoading(true)
      try {
        await Promise.all([
          loadDailyMealRecord(currentDateString, setDailyMealRecord),
          loadUserMealPresetForDay(setUserMealPreset),
        ])
      } finally {
        setIsDataLoading(false)
      }
    }
    loadAll()
  }, [
    currentDateString,
    setDailyMealRecord,
    setUserMealPreset,
    setIsDataLoading,
  ])

  useEffect(() => {
    setDailyCalories(roundToTwoDecimalPlaces(sumCalories))
    setDailyProtein(roundToTwoDecimalPlaces(sumProtein))
    setDailyFat(roundToTwoDecimalPlaces(sumFat))
    setDailyCarbohydrates(roundToTwoDecimalPlaces(sumCarbohydrates))
    // eslint-disable-next-line
  }, [sumCalories, sumProtein, sumFat, sumCarbohydrates])

  return (
    <Box>
      <Accordion defaultValue={defaultCategory} variant="separated">
        {mealCategoryNames.map((mealCategoryName) => (
          <DailyMealFormAccordionItem
            key={mealCategoryName}
            mealCategoryName={mealCategoryName}
            forms={forms}
          />
        ))}
      </Accordion>

      <Center mt="xl">
        <DailyMealFormApplyPresetToAllCategoriesButton forms={forms} />
      </Center>
    </Box>
  )
}

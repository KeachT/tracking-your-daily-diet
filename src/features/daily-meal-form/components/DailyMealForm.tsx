import { Accordion, Box, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '@/constants'

import {
  useCurrentDateStore,
  useLoadingStateStore,
  useNutritionNumbersStore,
} from '../../../stores'
import {
  createStringFromDate,
  loadUserMealPreset,
  roundToTwoDecimalPlaces,
} from '../../../utils'
import { useDailyMealRecordStore } from '../stores'
import { FormsType } from '../types'
import {
  createDailyMealRecordInitialValues,
  createSumNutritionValues,
  getDefaultCategory,
  loadDailyMealRecord,
} from '../utils'
import { DailyMealFormAccordionItem } from './DailyMealFormAccordionItem'
import { DailyMealFormApplyPresetToAllCategoriesButton } from './DailyMealFormApplyPresetToAllCategoriesButton'
import { DailyMealFormLoadError } from './DailyMealFormLoadError'

export function DailyMealForm() {
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const setIsDataLoading = useLoadingStateStore(
    (state) => state.setIsDataLoading,
  )
  const dailyMealRecord = useDailyMealRecordStore(
    (state) => state.dailyMealRecord,
  )
  const loadStatus = useDailyMealRecordStore((state) => state.loadStatus)
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
          loadDailyMealRecord(currentDateString),
          loadUserMealPreset(),
        ])
      } catch {
        // Both loaders record their own failure status, so this only guards
        // against an unexpected throw leaving the skeleton up.
      } finally {
        setIsDataLoading(false)
      }
    }
    loadAll()
  }, [currentDateString, setIsDataLoading])

  useEffect(() => {
    setDailyCalories(roundToTwoDecimalPlaces(sumCalories))
    setDailyProtein(roundToTwoDecimalPlaces(sumProtein))
    setDailyFat(roundToTwoDecimalPlaces(sumFat))
    setDailyCarbohydrates(roundToTwoDecimalPlaces(sumCarbohydrates))
    // eslint-disable-next-line
  }, [sumCalories, sumProtein, sumFat, sumCarbohydrates])

  if (loadStatus === 'error') {
    return <DailyMealFormLoadError />
  }

  return (
    <Box>
      <Accordion multiple defaultValue={[defaultCategory]} variant="separated">
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

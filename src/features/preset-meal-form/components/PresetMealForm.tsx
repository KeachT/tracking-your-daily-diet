import { Accordion, Box, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '@/constants'

import {
  selectSelectedUserMealPreset,
  useLoadingStateStore,
  usePresetNutritionNumbersStore,
  useUserMealPresetStore,
} from '../../../stores'
import { loadUserMealPresets, roundToTwoDecimalPlaces } from '../../../utils'
import { FormsType } from '../types'
import {
  createInitialFormValuesFromPreset,
  createSumNutritionValues,
} from '../utils'
import { PresetMealFormAccordionItem } from './PresetMealFormAccordionItem'
import { PresetMealFormBulkSaveButton } from './PresetMealFormBulkSaveButton'
import { PresetMealFormLoadError } from './PresetMealFormLoadError'

export function PresetMealForm() {
  const setIsDataLoading = useLoadingStateStore(
    (state) => state.setIsDataLoading,
  )
  const userMealPreset = useUserMealPresetStore(selectSelectedUserMealPreset)
  const loadStatus = useUserMealPresetStore((state) => state.loadStatus)
  const upsertUserMealPreset = useUserMealPresetStore(
    (state) => state.upsertUserMealPreset,
  )
  const setPresetCalories = usePresetNutritionNumbersStore(
    (state) => state.setPresetCalories,
  )
  const setPresetProtein = usePresetNutritionNumbersStore(
    (state) => state.setPresetProtein,
  )
  const setPresetFat = usePresetNutritionNumbersStore(
    (state) => state.setPresetFat,
  )
  const setPresetCarbohydrates = usePresetNutritionNumbersStore(
    (state) => state.setPresetCarbohydrates,
  )

  const forms: FormsType = useForm({})
  const mealCategoryNames = Object.values(
    MealCategoryName,
  ) as MealCategoryName[]

  const defaultCategory = MealCategoryName.BREAKFAST
  const { sumCalories, sumProtein, sumFat, sumCarbohydrates } =
    createSumNutritionValues(forms)

  useEffect(() => {
    const load = async () => {
      setIsDataLoading(true)
      try {
        await loadUserMealPresets()
      } finally {
        setIsDataLoading(false)
      }
    }
    load()
  }, [setIsDataLoading])

  useEffect(() => {
    const initialFormValues = createInitialFormValuesFromPreset(userMealPreset)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [userMealPreset])

  useEffect(() => {
    setPresetCalories(roundToTwoDecimalPlaces(sumCalories))
    setPresetProtein(roundToTwoDecimalPlaces(sumProtein))
    setPresetFat(roundToTwoDecimalPlaces(sumFat))
    setPresetCarbohydrates(roundToTwoDecimalPlaces(sumCarbohydrates))
    // eslint-disable-next-line
  }, [sumCalories, sumProtein, sumFat, sumCarbohydrates])

  if (loadStatus === 'error') {
    return <PresetMealFormLoadError />
  }

  if (loadStatus === 'ready' && !userMealPreset) {
    return null
  }

  return (
    <Box>
      <Accordion multiple defaultValue={[defaultCategory]} variant="separated">
        {mealCategoryNames.map((mealCategoryName) => (
          <PresetMealFormAccordionItem
            key={mealCategoryName}
            mealCategoryName={mealCategoryName}
            forms={forms}
          />
        ))}
      </Accordion>

      <Center mt="xl">
        <PresetMealFormBulkSaveButton
          forms={forms}
          userMealPreset={userMealPreset}
          upsertUserMealPreset={upsertUserMealPreset}
        />
      </Center>
    </Box>
  )
}

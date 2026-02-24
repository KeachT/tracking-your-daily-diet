import { Accordion, Box, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '@/constants'

import {
  useLoadingStateStore,
  usePresetNutritionNumbersStore,
  useUserMealPresetStore,
} from '../../../stores'
import { roundToTwoDecimalPlaces } from '../../../utils'
import { FormsType } from '../types'
import {
  createInitialFormValuesFromPreset,
  createSumNutritionValues,
  loadUserMealPreset,
} from '../utils'
import { PresetMealFormAccordionItem } from './PresetMealFormAccordionItem'
import { PresetMealFormBulkSaveButton } from './PresetMealFormBulkSaveButton'

export function PresetMealForm() {
  const setIsDataLoading = useLoadingStateStore(
    (state) => state.setIsDataLoading,
  )
  const userMealPreset = useUserMealPresetStore((state) => state.userMealPreset)
  const setUserMealPreset = useUserMealPresetStore(
    (state) => state.setUserMealPreset,
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
    loadUserMealPreset(setUserMealPreset, setIsDataLoading)
  }, [setUserMealPreset, setIsDataLoading])

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

  return (
    <Box>
      <Accordion defaultValue={defaultCategory} variant="separated">
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
          setUserMealPreset={setUserMealPreset}
        />
      </Center>
    </Box>
  )
}

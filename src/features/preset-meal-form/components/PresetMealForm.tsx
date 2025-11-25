import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

import { MealCategoryName } from '../../../models'
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

export function PresetMealForm() {
  const { setIsDataLoading } = useLoadingStateStore()
  const { userMealPreset, setUserMealPreset } = useUserMealPresetStore()
  const {
    setPresetCalories,
    setPresetProtein,
    setPresetFat,
    setPresetCarbohydrates,
  } = usePresetNutritionNumbersStore()

  const forms: FormsType = useForm({})
  const mealCategoryNames = Object.values(
    MealCategoryName
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
    <Accordion defaultValue={defaultCategory} variant="separated">
      {mealCategoryNames.map((mealCategoryName) => (
        <PresetMealFormAccordionItem
          key={mealCategoryName}
          mealCategoryName={mealCategoryName}
          forms={forms}
        />
      ))}
    </Accordion>
  )
}

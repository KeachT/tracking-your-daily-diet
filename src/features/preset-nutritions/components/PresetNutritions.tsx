import { useEffect } from 'react'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import {
  useLoadingStateStore,
  usePresetNutritionNumbersStore,
} from '../../../stores'
import { Nutritions } from '../../nutritions'
import { useUserMealPresetStore } from '../../preset-meal-form/stores'
import {
  calculatePresetNutritionValues,
  extractAllFoodsFromPreset,
} from '../utils'

export function PresetNutritions() {
  const { isDataLoading } = useLoadingStateStore()
  const { userMealPreset } = useUserMealPresetStore()
  const {
    presetCalories,
    presetProtein,
    presetFat,
    presetCarbohydrates,
    setPresetCalories,
    setPresetProtein,
    setPresetFat,
    setPresetCarbohydrates,
  } = usePresetNutritionNumbersStore()

  useEffect(() => {
    const allFoods = extractAllFoodsFromPreset(userMealPreset)
    const { totalCalories, totalProtein, totalFat, totalCarbohydrates } =
      calculatePresetNutritionValues(allFoods)
    setPresetCalories(totalCalories)
    setPresetProtein(totalProtein)
    setPresetFat(totalFat)
    setPresetCarbohydrates(totalCarbohydrates)
  }, [
    userMealPreset,
    setPresetCalories,
    setPresetProtein,
    setPresetFat,
    setPresetCarbohydrates,
  ])

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <Nutritions
      dailyCalories={presetCalories}
      dailyProtein={presetProtein}
      dailyFat={presetFat}
      dailyCarbohydrates={presetCarbohydrates}
    />
  )
}

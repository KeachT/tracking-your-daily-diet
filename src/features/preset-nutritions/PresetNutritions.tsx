import { LoadingSkeleton } from '../../components/LoadingSkeleton'
import { NutritionSummary } from '../../components/NutritionSummary'
import {
  useLoadingStateStore,
  usePresetNutritionNumbersStore,
} from '../../stores'

export function PresetNutritions() {
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)
  const presetCalories = usePresetNutritionNumbersStore(
    (state) => state.presetCalories,
  )
  const presetProtein = usePresetNutritionNumbersStore(
    (state) => state.presetProtein,
  )
  const presetFat = usePresetNutritionNumbersStore((state) => state.presetFat)
  const presetCarbohydrates = usePresetNutritionNumbersStore(
    (state) => state.presetCarbohydrates,
  )

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <NutritionSummary
      calories={presetCalories}
      protein={presetProtein}
      fat={presetFat}
      carbohydrates={presetCarbohydrates}
    />
  )
}

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NutritionSummary } from '../../../components/NutritionSummary'
import {
  useLoadingStateStore,
  usePresetNutritionNumbersStore,
} from '../../../stores'

export function PresetNutritions() {
  const { isDataLoading } = useLoadingStateStore()
  const { presetCalories, presetProtein, presetFat, presetCarbohydrates } =
    usePresetNutritionNumbersStore()

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

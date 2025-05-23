import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { Nutritions } from '../../../components/Nutritions'
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
    <Nutritions
      calories={presetCalories}
      protein={presetProtein}
      fat={presetFat}
      carbohydrates={presetCarbohydrates}
    />
  )
}

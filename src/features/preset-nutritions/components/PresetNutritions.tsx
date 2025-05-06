import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import {
  useLoadingStateStore,
  usePresetNutritionNumbersStore,
} from '../../../stores'
import { Nutritions } from '../../nutritions'

export function PresetNutritions() {
  const { isDataLoading } = useLoadingStateStore()
  const { presetCalories, presetProtein, presetFat, presetCarbohydrates } =
    usePresetNutritionNumbersStore()

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

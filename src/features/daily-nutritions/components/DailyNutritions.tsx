import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NutritionSummary } from '../../../components/NutritionSummary'
import { useLoadingStateStore, useNutritionNumbersStore } from '../../../stores'

export function DailyNutritions() {
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)
  const dailyCalories = useNutritionNumbersStore((state) => state.dailyCalories)
  const dailyProtein = useNutritionNumbersStore((state) => state.dailyProtein)
  const dailyFat = useNutritionNumbersStore((state) => state.dailyFat)
  const dailyCarbohydrates = useNutritionNumbersStore(
    (state) => state.dailyCarbohydrates,
  )

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <NutritionSummary
      calories={dailyCalories}
      protein={dailyProtein}
      fat={dailyFat}
      carbohydrates={dailyCarbohydrates}
    />
  )
}

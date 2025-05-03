import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { useLoadingStateStore, useNutritionNumbersStore } from '../../../stores'
import { Nutritions } from '../../nutritions'

export function DailyNutritions() {
  const { isDataLoading } = useLoadingStateStore()
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <Nutritions
      dailyCalories={dailyCalories}
      dailyProtein={dailyProtein}
      dailyFat={dailyFat}
      dailyCarbohydrates={dailyCarbohydrates}
    />
  )
}

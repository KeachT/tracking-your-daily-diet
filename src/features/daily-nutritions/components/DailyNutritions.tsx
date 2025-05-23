import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { Nutritions } from '../../../components/nutritions'
import { useLoadingStateStore, useNutritionNumbersStore } from '../../../stores'

export function DailyNutritions() {
  const { isDataLoading } = useLoadingStateStore()
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  if (isDataLoading) {
    return <LoadingSkeleton height={200} />
  }

  return (
    <Nutritions
      calories={dailyCalories}
      protein={dailyProtein}
      fat={dailyFat}
      carbohydrates={dailyCarbohydrates}
    />
  )
}

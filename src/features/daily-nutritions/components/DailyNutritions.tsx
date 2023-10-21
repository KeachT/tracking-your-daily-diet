import { useNutritionNumbersStore } from '../../../stores/nutritionNumbers'
import { Nutritions } from '../../nutritions'

export function DailyNutritions() {
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  return (
    <Nutritions
      dailyCalories={dailyCalories}
      dailyProtein={dailyProtein}
      dailyFat={dailyFat}
      dailyCarbohydrates={dailyCarbohydrates}
    />
  )
}

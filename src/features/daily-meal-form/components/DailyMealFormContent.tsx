import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NoFoodText } from '../../../components/NoFoodText'
import { MealCategoryName } from '../../../models'
import { useLoadingStateStore } from '../../../stores'
import { FormsType } from '../types'
import { DailyMealFormFields } from './DailyMealFormFields'

type MealFormContentProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function DailyMealFormContent({
  mealCategoryName,
  forms,
}: MealFormContentProps) {
  const { isDataLoading } = useLoadingStateStore()

  if (isDataLoading) {
    return <LoadingSkeleton height={100} />
  }

  if (forms.values[mealCategoryName]?.length > 0) {
    return (
      <DailyMealFormFields form={forms} mealCategoryName={mealCategoryName} />
    )
  }

  return <NoFoodText />
}

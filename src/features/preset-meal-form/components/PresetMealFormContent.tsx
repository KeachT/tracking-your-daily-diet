import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NoFoodText } from '../../../components/NoFoodText'
import { MealCategoryName } from '../../../models'
import { useLoadingStateStore } from '../../../stores'
import { FormsType } from '../types'
import { PresetMealFormFields } from './PresetMealFormFields'

type MealFormContentProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function PresetMealFormContent({
  mealCategoryName,
  forms,
}: MealFormContentProps) {
  const { isDataLoading } = useLoadingStateStore()

  if (isDataLoading) {
    return <LoadingSkeleton height={100} />
  }

  if (forms.values[mealCategoryName]?.length > 0) {
    return (
      <PresetMealFormFields form={forms} mealCategoryName={mealCategoryName} />
    )
  }

  return <NoFoodText />
}

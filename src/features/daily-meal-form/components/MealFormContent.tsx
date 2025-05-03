import { MealCategoryName } from '@/API'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NoFoodText } from '../../../components/NoFoodText'
import { useLoadingStateStore } from '../../../stores'
import { FormsType } from '../types'
import { MealFormFields } from './MealFormFields'

type MealFormContentProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
}

export function MealFormContent({
  mealCategoryName,
  forms,
}: MealFormContentProps) {
  const { isDataLoading } = useLoadingStateStore()

  if (isDataLoading) {
    return <LoadingSkeleton height={100} />
  }

  if (forms.values[mealCategoryName]?.length > 0) {
    return <MealFormFields form={forms} mealCategoryName={mealCategoryName} />
  }

  return <NoFoodText />
}

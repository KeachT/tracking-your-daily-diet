import { MealCategoryName } from '@/API'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { NoFoodText } from '../../../components/NoFoodText'
import { FormsType } from '../types'
import { PresetMealFormFields } from './PresetMealFormFields'

type MealFormContentProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
  isLoading: boolean
}

export function PresetMealFormContent({
  mealCategoryName,
  forms,
  isLoading,
}: MealFormContentProps) {
  if (isLoading) {
    return <LoadingSkeleton height={100} />
  }

  if (forms.values[mealCategoryName]?.length > 0) {
    return (
      <PresetMealFormFields form={forms} mealCategoryName={mealCategoryName} />
    )
  }

  return <NoFoodText />
}

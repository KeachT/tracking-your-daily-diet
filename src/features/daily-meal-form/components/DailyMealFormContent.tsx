import { Box } from '@mantine/core'

import { MealCategoryName } from '@/constants'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { MealFormFieldsHeader } from '../../../components/MealFormFieldsHeader'
import { NoFoodText } from '../../../components/NoFoodText'
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
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)

  if (isDataLoading) {
    return <LoadingSkeleton height={100} />
  }

  if (forms.values[mealCategoryName]?.length > 0) {
    return (
      <Box>
        <MealFormFieldsHeader />
        <DailyMealFormFields form={forms} mealCategoryName={mealCategoryName} />
      </Box>
    )
  }

  return <NoFoodText />
}

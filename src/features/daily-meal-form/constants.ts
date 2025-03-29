import { MealCategoryName } from '@/API'

export const MEAL_CATEGORY_LABELS: { [key in MealCategoryName]: string } = {
  [MealCategoryName.BREAKFAST]: '朝食',
  [MealCategoryName.LUNCH]: '昼食',
  [MealCategoryName.DINNER]: '夕食',
  [MealCategoryName.SNACK]: '間食',
}

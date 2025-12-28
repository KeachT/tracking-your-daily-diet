import { createId } from '@paralleldrive/cuid2'

export type FoodInitialValues = {
  id: string
  name: string
  calories: string
  protein: string
  carbohydrates: string
  fat: string
}

export const createFoodInitialValues = (): FoodInitialValues => ({
  id: createId(),
  name: '',
  calories: '',
  protein: '',
  carbohydrates: '',
  fat: '',
})

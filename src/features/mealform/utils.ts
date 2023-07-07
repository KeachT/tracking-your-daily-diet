import { randomId } from '@mantine/hooks'
import { FormField } from './types'

export const createFoodInitialValues = (): FormField => {
  return {
    name: '',
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    key: randomId(),
  }
}

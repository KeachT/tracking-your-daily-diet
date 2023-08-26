import { randomId } from '@mantine/hooks'
import { sum } from 'radash'
import { FormField, FormsType } from './types'

/**
 * Creates initial values for a food form.
 *
 * @returns {FormField} - The initial values object with empty name and zero values for calories, protein, carbohydrates, fat, and a randomly generated key.
 */
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

/**
 * Creates an array of objects containing the sum of values for each property in the forms.
 *
 * @param {FormsType} forms - The forms object containing the values to be summed.
 * @returns {Array<{ sumCalories: number, sumProtein: number, sumFat: number, sumCarbohydrates: number }>} - The array of objects with the sum of values for calories, protein, fat, and carbohydrates.
 */
export const createSumValuesAry = (forms: FormsType) => {
  const sumValuesAry = Object.values(forms.values).map((formValue) => {
    const sumCalories = sum(formValue, (f) => Number(f.calories))
    const sumProtein = sum(formValue, (f) => Number(f.protein))
    const sumFat = sum(formValue, (f) => Number(f.fat))
    const sumCarbohydrates = sum(formValue, (f) => Number(f.carbohydrates))

    return { sumCalories, sumProtein, sumFat, sumCarbohydrates }
  })

  return sumValuesAry
}

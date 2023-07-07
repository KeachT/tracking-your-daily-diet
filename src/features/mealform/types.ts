export interface FormField {
  name: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
  key: string
}

export interface FormData {
  [x: string]: FormField[]
}

export type FormField = {
  name: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
  key: string
}

export type FormData = {
  [x: string]: FormField[]
}

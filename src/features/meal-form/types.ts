import { UseFormReturnType } from '@mantine/form'

export type FormField = {
  id: string
  name: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
}

export type FormData = {
  [x: string]: FormField[]
}

export type FormsType = UseFormReturnType<
  {
    [x: string]: FormField[]
  },
  (values: { [x: string]: FormField[] }) => {
    [x: string]: FormField[]
  }
>

import { UseFormReturnType } from '@mantine/form'

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

export type FormsType = UseFormReturnType<
  {
    [x: string]: FormField[]
  },
  (values: { [x: string]: FormField[] }) => {
    [x: string]: FormField[]
  }
>

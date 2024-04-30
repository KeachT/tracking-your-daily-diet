import { ActionIcon, Grid, Group, NumberInput, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { IconTrash } from '@tabler/icons-react'

import { FormData } from '../types'

type MealFormFieldsProps = {
  form: UseFormReturnType<FormData, (values: FormData) => FormData>
  mealCategoryName: string
}

export function MealFormFields({
  form,
  mealCategoryName,
}: MealFormFieldsProps) {
  const getFormItemProps = (index: number, fieldName: string) =>
    form.getInputProps(`${mealCategoryName}.${index}.${fieldName}`)

  return form.values?.[mealCategoryName].map((item, index) => (
    <Group key={item.id} mt="xs">
      <Grid align="center">
        <Grid.Col xs={6} sm={3}>
          <TextInput
            placeholder="Food name"
            {...getFormItemProps(index, 'name')}
          />
        </Grid.Col>
        <Grid.Col xs={6} sm={2}>
          <NumberInput
            placeholder="Calories"
            min={0}
            max={999999}
            hideControls
            {...getFormItemProps(index, 'calories')}
          />
        </Grid.Col>
        <Grid.Col xs={6} sm={2}>
          <NumberInput
            placeholder="Protein"
            min={0}
            max={999999}
            hideControls
            precision={2}
            removeTrailingZeros
            {...getFormItemProps(index, 'protein')}
          />
        </Grid.Col>
        <Grid.Col xs={6} sm={2}>
          <NumberInput
            placeholder="Fat"
            min={0}
            max={999999}
            hideControls
            precision={2}
            removeTrailingZeros
            {...getFormItemProps(index, 'fat')}
          />
        </Grid.Col>
        <Grid.Col xs={6} sm={2}>
          <NumberInput
            placeholder="Carbo"
            min={0}
            max={999999}
            hideControls
            precision={2}
            removeTrailingZeros
            {...getFormItemProps(index, 'carbohydrates')}
          />
        </Grid.Col>
        <Grid.Col span={1} mt={2}>
          <ActionIcon
            color="red"
            onClick={() => form.removeListItem(`${mealCategoryName}`, index)}
          >
            <IconTrash size={18} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </Group>
  ))
}

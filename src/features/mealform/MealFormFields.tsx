import { FC } from 'react'
import { UseFormReturnType } from '@mantine/form'
import { ActionIcon, Group, Grid, NumberInput, TextInput } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { FormData } from './types'

interface MealFormFieldsProps {
  form: UseFormReturnType<FormData, (values: FormData) => FormData>
  mealCategoryName: string
}

export const MealFormFields: FC<MealFormFieldsProps> = ({
  form,
  mealCategoryName,
}) => {
  const getFormItemProps = (index: number, fieldName: string) =>
    form.getInputProps(`${mealCategoryName}.${index}.${fieldName}`)

  return form.values?.[mealCategoryName].map((item, index) => (
    <Group key={item.key} mt="xs">
      <Grid>
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
            {...getFormItemProps(index, 'protein')}
          />
        </Grid.Col>
        <Grid.Col xs={6} sm={2}>
          <NumberInput
            placeholder="Fat"
            min={0}
            max={999999}
            hideControls
            {...getFormItemProps(index, 'fat')}
          />
        </Grid.Col>
        <Grid.Col xs={6} sm={2}>
          <NumberInput
            placeholder="Carbohydrates"
            min={0}
            max={999999}
            hideControls
            {...getFormItemProps(index, 'carbohydrates')}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <ActionIcon
            color="red"
            onClick={() => form.removeListItem(`${mealCategoryName}`, index)}
          >
            <IconTrash size="1rem" />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </Group>
  ))
}

import { ActionIcon, Grid, Group, NumberInput, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { IconTrash } from '@tabler/icons-react'

import { FormData } from '../types'

type MealFormFieldsProps = {
  form: UseFormReturnType<FormData, (values: FormData) => FormData>
  mealCategoryName: string
}

export function DailyMealFormFields({
  form,
  mealCategoryName,
}: MealFormFieldsProps) {
  const getFormItemProps = (index: number, fieldName: string) =>
    form.getInputProps(`${mealCategoryName}.${index}.${fieldName}`)

  return form.values?.[mealCategoryName].map((item, index) => (
    <Group key={item.id} mt="xs">
      <Grid align="center">
        <Grid.Col span={{ base: 12, sm: 3 }}>
          <TextInput
            placeholder="食品名"
            {...getFormItemProps(index, 'name')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2 }}>
          <NumberInput
            placeholder="カロリー"
            min={0}
            max={999999}
            hideControls
            {...getFormItemProps(index, 'calories')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2 }}>
          <NumberInput
            placeholder="タンパク質"
            min={0}
            max={999999}
            hideControls
            decimalScale={2}
            {...getFormItemProps(index, 'protein')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2 }}>
          <NumberInput
            placeholder="脂質"
            min={0}
            max={999999}
            hideControls
            decimalScale={2}
            {...getFormItemProps(index, 'fat')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 3, sm: 2 }}>
          <NumberInput
            placeholder="炭水化物"
            min={0}
            max={999999}
            hideControls
            decimalScale={2}
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

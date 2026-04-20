import { ActionIcon, Grid, Group, NumberInput, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { createId } from '@paralleldrive/cuid2'
import { IconCopy, IconTrash } from '@tabler/icons-react'

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

  const handleCopy = (index: number) => {
    const original = form.values[mealCategoryName][index]
    form.insertListItem(
      mealCategoryName,
      { ...original, id: createId() },
      index + 1,
    )
  }

  const handleRemove = (index: number) =>
    form.removeListItem(`${mealCategoryName}`, index)

  return form.values?.[mealCategoryName].map((item, index) => (
    <Group key={item.id} mt="xs">
      <Grid align="center">
        <Grid.Col span={{ base: 12, sm: 2 }}>
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
        <Grid.Col span={2} mt={2}>
          <Group gap="xs" wrap="nowrap">
            <ActionIcon color="gray" onClick={() => handleCopy(index)}>
              <IconCopy size={18} />
            </ActionIcon>
            <ActionIcon color="red" onClick={() => handleRemove(index)}>
              <IconTrash size={18} />
            </ActionIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </Group>
  ))
}

import { Button, Center } from '@mantine/core'

type MealFormButtonsProps = {
  onAdd: () => void
  onSave: () => Promise<void>
  isSaveButtonDisabled: boolean
}

export function MealFormButtons({
  onAdd,
  onSave,
  isSaveButtonDisabled,
}: MealFormButtonsProps) {
  return (
    <Center mt="xl">
      <Button mr="md" onClick={onAdd}>
        追加
      </Button>
      <Button color="teal" onClick={onSave} disabled={isSaveButtonDisabled}>
        保存
      </Button>
    </Center>
  )
}

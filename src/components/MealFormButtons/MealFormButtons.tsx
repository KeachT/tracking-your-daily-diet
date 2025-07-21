import { Button, Center } from '@mantine/core'

type MealFormButtonsProps = {
  onAdd: () => void
  onSave: () => Promise<void>
  onApplyPreset?: () => Promise<void>
  isSaveButtonDisabled: boolean
  isApplyPresetButtonDisabled?: boolean
}

export function MealFormButtons({
  onAdd,
  onSave,
  onApplyPreset,
  isSaveButtonDisabled,
  isApplyPresetButtonDisabled,
}: MealFormButtonsProps) {
  return (
    <Center mt="xl">
      {onApplyPreset && (
        <Button
          mr="md"
          variant="outline"
          color="blue"
          onClick={onApplyPreset}
          disabled={isApplyPresetButtonDisabled}
        >
          プリセット適用
        </Button>
      )}
      <Button mr="md" onClick={onAdd}>
        追加
      </Button>
      <Button
        mr="md"
        color="teal"
        onClick={onSave}
        disabled={isSaveButtonDisabled}
      >
        保存
      </Button>
    </Center>
  )
}

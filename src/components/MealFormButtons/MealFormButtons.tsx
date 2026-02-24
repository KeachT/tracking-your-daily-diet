import { Button, Center } from '@mantine/core'

import { StatusButton } from '../StatusButton'

type MealFormButtonsProps = {
  onAdd: () => void
  onSave?: () => Promise<void>
  isSaveButtonDisabled?: boolean
  saveStatus?: 'idle' | 'loading' | 'success' | 'error'
}

export function MealFormButtons({
  onAdd,
  onSave,
  isSaveButtonDisabled,
  saveStatus = 'idle',
}: MealFormButtonsProps) {
  return (
    <Center mt="xl">
      <Button mr="md" onClick={onAdd}>
        追加
      </Button>
      {onSave && (
        <StatusButton
          mr="md"
          color="teal"
          onClick={onSave}
          status={saveStatus}
          label="保存"
          statusLabels={{ success: '保存成功', error: '保存失敗' }}
          disabled={isSaveButtonDisabled}
        />
      )}
    </Center>
  )
}

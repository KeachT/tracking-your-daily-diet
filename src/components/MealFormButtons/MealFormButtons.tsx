import { Center } from '@mantine/core'

import { AddButton } from '../AddButton'
import { SaveButton } from '../SaveButton'

type MealFormButtonsProps = {
  onAdd: () => void
  onSave?: () => Promise<void>
}

export function MealFormButtons({ onAdd, onSave }: MealFormButtonsProps) {
  return (
    <Center mt="xl">
      <AddButton mr="md" onClick={onAdd} />
      {onSave && <SaveButton mr="md" onSave={onSave} />}
    </Center>
  )
}

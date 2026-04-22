import { IconDeviceFloppy } from '@tabler/icons-react'
import { ComponentProps } from 'react'

import { SAVE_BUTTON_REENABLE_DELAY_MS } from '../../constants'
import { StatusButton, useStatusButtonState } from '../StatusButton'

type SaveButtonProps = Omit<
  ComponentProps<typeof StatusButton>,
  'label' | 'statusLabels' | 'status' | 'onClick'
> & {
  onSave: () => Promise<void>
  label?: string
  statusLabels?: { success: string; error: string }
}

export function SaveButton({
  onSave,
  label = '保存',
  statusLabels = { success: '保存成功', error: '保存失敗' },
  color = 'teal',
  leftSection = <IconDeviceFloppy size={16} />,
  disabled,
  ...buttonProps
}: SaveButtonProps) {
  const { saveStatus, startLoading, markSuccess, markError } =
    useStatusButtonState(SAVE_BUTTON_REENABLE_DELAY_MS)

  const handleClick = async () => {
    startLoading()
    try {
      await onSave()
      markSuccess()
    } catch {
      markError()
    }
  }

  return (
    <StatusButton
      label={label}
      statusLabels={statusLabels}
      color={color}
      leftSection={leftSection}
      status={saveStatus}
      onClick={handleClick}
      disabled={disabled || saveStatus === 'loading'}
      {...buttonProps}
    />
  )
}

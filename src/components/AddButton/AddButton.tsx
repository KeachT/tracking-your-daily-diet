import { Button, ButtonProps } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { MouseEventHandler } from 'react'

type AddButtonProps = Omit<ButtonProps, 'onClick'> & {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function AddButton({
  children = '追加',
  variant = 'outline',
  leftSection = <IconPlus size={16} />,
  ...buttonProps
}: AddButtonProps) {
  return (
    <Button variant={variant} leftSection={leftSection} {...buttonProps}>
      {children}
    </Button>
  )
}

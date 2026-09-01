import { Box, Button, ButtonProps } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import { forwardRef, MouseEventHandler } from 'react'

type StatusButtonProps = Omit<ButtonProps, 'children' | 'onClick'> & {
  onClick?: MouseEventHandler<HTMLButtonElement>
  label: string
  status: 'idle' | 'loading' | 'success' | 'error'
  statusLabels: {
    success: string
    error: string
  }
}

const srOnlyStyle = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap',
} as const

// The ref goes to the button itself so the component can act as the trigger of
// an overlay (Mantine's Menu.Target and friends position against that element).
export const StatusButton = forwardRef<HTMLButtonElement, StatusButtonProps>(
  function StatusButton(
    { label, status, statusLabels, disabled, ...buttonProps },
    ref,
  ) {
    let statusLabel = ''
    if (status === 'success') {
      statusLabel = statusLabels.success
    } else if (status === 'error') {
      statusLabel = statusLabels.error
    }

    return (
      <Box>
        <Button
          ref={ref}
          {...buttonProps}
          rightSection={
            status === 'success' ? (
              <IconCheck size={16} />
            ) : status === 'error' ? (
              <IconX size={16} />
            ) : null
          }
          disabled={Boolean(disabled) || status === 'loading'}
        >
          {label}
        </Button>
        <Box aria-live="polite" style={srOnlyStyle}>
          {statusLabel}
        </Box>
      </Box>
    )
  },
)

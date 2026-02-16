import { notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'
import { Dispatch, SetStateAction } from 'react'

import { SAVE_BUTTON_REENABLE_DELAY_MS } from '../constants'

/**
 * Displays a notification with a specified title, message, and type.
 * Optionally, it can re-enable a button after a delay.
 *
 * @param title - The title of the notification.
 * @param message - The message content of the notification.
 * @param type - The type of the notification, either 'success' or 'error'.
 * @param setButtonDisabled - Optional callback to set the button's disabled state.
 * If provided, the button will be re-enabled after a predefined delay.
 */
export const showNotification = (
  title: string,
  message: string,
  type: 'success' | 'error',
  setButtonDisabled?: Dispatch<SetStateAction<boolean>>,
): void => {
  notifications.show({
    title,
    message,
    color: type === 'success' ? 'green' : 'red',
    icon: type === 'success' ? <IconCheck /> : <IconX />,
  })

  if (setButtonDisabled) {
    setTimeout(() => setButtonDisabled(false), SAVE_BUTTON_REENABLE_DELAY_MS)
  }
}

import {
  type SaveStatus,
  useStatusButtonState,
} from '@/components/StatusButton'
import { SAVE_BUTTON_REENABLE_DELAY_MS } from '@/constants'

import { purgeAllUserData } from '../utils/purgeAllUserData'
import { resetStoresAfterPurge } from '../utils/resetStoresAfterPurge'

type UseDeleteAllData = {
  deleteStatus: SaveStatus
  handleDelete: () => Promise<boolean>
}

/**
 * Deletes all of the signed-in user's data, then resets the client stores so
 * the UI reflects the empty state immediately. Loading/success/error feedback
 * reuses the shared status-button state.
 */
export function useDeleteAllData(): UseDeleteAllData {
  const { saveStatus, startLoading, markSuccess, markError } =
    useStatusButtonState(SAVE_BUTTON_REENABLE_DELAY_MS)

  const handleDelete = async (): Promise<boolean> => {
    startLoading()
    try {
      await purgeAllUserData()
      resetStoresAfterPurge()
      markSuccess()
      return true
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Failed to purge user data:', error)
      }
      markError()
      return false
    }
  }

  return { deleteStatus: saveStatus, handleDelete }
}

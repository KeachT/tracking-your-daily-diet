import { useAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

import {
  type SaveStatus,
  useStatusButtonState,
} from '@/components/StatusButton'
import { Path, SAVE_BUTTON_REENABLE_DELAY_MS } from '@/constants'

import { withdrawAccount } from '../utils/withdrawAccount'

type UseWithdrawAccount = {
  withdrawStatus: SaveStatus
  errorMessage: string | null
  handleWithdraw: () => Promise<void>
}

const REAUTH_ERROR_NAMES = ['NotAuthorizedException', 'NotAuthorizedError']
const REAUTH_ERROR_MESSAGE =
  '認証の有効期限が切れている可能性があります。お手数ですが、もう一度ログインしてからお試しください。'
const DEFAULT_ERROR_MESSAGE =
  '退会処理に失敗しました。データの削除は完了している場合があります。時間をおいて、もう一度お試しください。'

function resolveErrorMessage(error: unknown): string {
  const name = error instanceof Error ? error.name : ''
  return REAUTH_ERROR_NAMES.includes(name)
    ? REAUTH_ERROR_MESSAGE
    : DEFAULT_ERROR_MESSAGE
}

/**
 * Runs the withdrawal flow (purge → deleteUser), then signs out and redirects
 * to the landing page.
 */
export function useWithdrawAccount(): UseWithdrawAccount {
  const { signOut } = useAuthenticator()
  const router = useRouter()
  const { saveStatus, startLoading, markError } = useStatusButtonState(
    SAVE_BUTTON_REENABLE_DELAY_MS,
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleWithdraw = async (): Promise<void> => {
    startLoading()
    setErrorMessage(null)

    try {
      await withdrawAccount()
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Failed to withdraw account:', error)
      }
      setErrorMessage(resolveErrorMessage(error))
      markError()
      return
    }

    try {
      await signOut()
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Sign-out after withdrawal failed (ignored):', error)
      }
    }
    router.replace(Path.Landingpage)
  }

  return { withdrawStatus: saveStatus, errorMessage, handleWithdraw }
}

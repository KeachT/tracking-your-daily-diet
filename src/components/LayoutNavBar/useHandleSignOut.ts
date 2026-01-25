import '@/amplify/configure'

import { useAuthenticator } from '@aws-amplify/ui-react'
import { useCallback } from 'react'

export function useHandleSignOut() {
  const { signOut } = useAuthenticator()

  const handleSignOut = useCallback(async () => {
    try {
      await signOut()
      if (process.env.NODE_ENV !== 'production') {
        console.info('Signed out')
      }
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error signing out:', error)
      }
    }
  }, [signOut])

  return handleSignOut
}

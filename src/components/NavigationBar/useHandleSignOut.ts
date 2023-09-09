import { useAuthenticator } from '@aws-amplify/ui-react'
import { useCallback } from 'react'

export function useHandleSignOut() {
  const { signOut } = useAuthenticator()

  const handleSignOut = useCallback(async () => {
    try {
      await signOut()
      console.log('Signed out')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }, [signOut])

  return handleSignOut
}

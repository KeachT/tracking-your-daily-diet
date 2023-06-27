import { useCallback } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'

export const useHandleSignOut = () => {
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

import { useAuthenticator } from '@aws-amplify/ui-react'

import { useGuestModeStore } from '../../stores'

/**
 * Whether the nav bar should be rendered.
 *
 * The nav bar is app navigation plus a log-out link, so it only makes sense to
 * someone who is signed in. The landing page and the legal pages are reachable
 * while signed out, and would otherwise show it.
 */
export function useNavBarVisible(showNavBar: boolean) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const { isGuestMode } = useGuestModeStore()

  return showNavBar && (authStatus === 'authenticated' || isGuestMode)
}

import '@/utils/ensureAmplifyConfigured'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import '@mantine/core/styles.css'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { LoadingIndicator } from '../components/LoadingIndicator'
import { Path, PublicPaths } from '../constants'
import { useGuestModeStore } from '../stores'
import { checkIsLoading, loadDailyGoal } from '../utils'

export default function App(props: AppProps) {
  return (
    <Authenticator.Provider>
      <MantineProvider defaultColorScheme="light">
        <MyApp {...props} />
      </MantineProvider>
    </Authenticator.Provider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const { isGuestMode } = useGuestModeStore()
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus, router.pathname, isGuestMode)
  // Guest mode outranks authStatus: a guest is signed in as far as routing goes.
  const isSignedIn = isGuestMode || authStatus === 'authenticated'

  // Fetching depends on the session only. Leaving the route out of the
  // dependencies is what keeps a navigation from firing another query.
  useEffect(() => {
    if (isSignedIn) {
      loadDailyGoal()
    }
    // eslint-disable-next-line
  }, [authStatus, isGuestMode])

  // The guard has to watch the route as well as the session. On a history move
  // or an in-app link the session never changes, so an effect keyed on
  // authStatus alone never re-runs — checkIsLoading still returns true and the
  // screen sits on the loading indicator forever.
  useEffect(() => {
    if (isSignedIn) {
      if (router.pathname === Path.Landingpage) {
        router.replace(Path.Day)
      }
      return
    }

    // 'configuring' is deliberately left alone: redirecting before the session
    // is known would throw a signed-in user out on the first paint.
    if (
      authStatus === 'unauthenticated' &&
      !PublicPaths.includes(router.pathname)
    ) {
      // replace, not push — being bounced means "you cannot be here", so the
      // page must not stay in the history for the back button to return to.
      router.replace(Path.Landingpage)
    }
    // eslint-disable-next-line
  }, [authStatus, isGuestMode, router.pathname])

  return isLoading ? <LoadingIndicator /> : <Component {...pageProps} />
}

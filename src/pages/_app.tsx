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
import { Path } from '../constants'
import { useDailyGoalStore, useGuestModeStore } from '../stores'
import { checkIsLoading, fetchAndSetDailyGoal } from '../utils'

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
  const setDailyGoal = useDailyGoalStore((state) => state.setDailyGoal)
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus, router.pathname, isGuestMode)

  useEffect(() => {
    if (isGuestMode) {
      fetchAndSetDailyGoal(setDailyGoal)
      if (router.pathname === Path.Landingpage) {
        router.push(Path.Day)
      }
      return
    }

    if (authStatus === 'unauthenticated') {
      router.push(Path.Landingpage)
      return
    }

    if (authStatus === 'authenticated') {
      fetchAndSetDailyGoal(setDailyGoal)
      router.push(Path.Day)
      return
    }

    // eslint-disable-next-line
  }, [authStatus, isGuestMode])

  return isLoading ? <LoadingIndicator /> : <Component {...pageProps} />
}

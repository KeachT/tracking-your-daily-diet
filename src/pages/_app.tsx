import '@/utils/ensureAmplifyConfigured'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { LoadingIndicator } from '../components/LoadingIndicator'
import { Path } from '../constants'
import { useDailyGoalStore } from '../stores'
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
  const setDailyGoal = useDailyGoalStore((state) => state.setDailyGoal)
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus, router.pathname)

  useEffect(() => {
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
  }, [authStatus])

  return isLoading ? <LoadingIndicator /> : <Component {...pageProps} />
}

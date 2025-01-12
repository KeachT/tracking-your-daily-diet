import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { MantineProvider } from '@mantine/core'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import awsExports from '../aws-exports'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { Path } from '../constants'
import { fetchDailyGoals } from '../features/daily-goal/api'
import { useDailyGoalStore } from '../stores'
import { checkIsLoading } from '../utils'

Amplify.configure(awsExports)

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
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus, router.pathname)

  const { setDailyGoal } = useDailyGoalStore()

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.push(Path.Landingpage)
    }
    if (authStatus === 'authenticated') {
      router.push(Path.Day)
    }
    // eslint-disable-next-line
  }, [authStatus])

  useEffect(() => {
    authStatus === 'authenticated' && fetchDailyGoals(setDailyGoal)
    // eslint-disable-next-line
  }, [authStatus])

  return isLoading ? <LoadingIndicator /> : <Component {...pageProps} />
}

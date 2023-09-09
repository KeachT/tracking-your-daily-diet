import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import { MantineProvider } from '@mantine/core'
import { Path } from '../constants/path'
import { fetchDailyGoals } from '../features/daily-goal/utils'
import { useDailyGoalStore } from '../stores/dailyGoal'
import { checkIsLoading } from '../utils/checkIsLoading'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'

Amplify.configure(awsExports)

export default function App(props: AppProps) {
  return (
    <Authenticator.Provider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // Put your mantine theme override here
        theme={{ colorScheme: 'light' }}
      >
        <MyApp {...props} />
      </MantineProvider>
    </Authenticator.Provider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus, router.pathname)

  const {
    setDailyGoalId,
    setCalories,
    setProtein,
    setFat,
    setCarbohydrates,
    setVersion,
  } = useDailyGoalStore()

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
    authStatus === 'authenticated' &&
      fetchDailyGoals(
        setDailyGoalId,
        setCalories,
        setProtein,
        setFat,
        setCarbohydrates,
        setVersion
      )
    // eslint-disable-next-line
  }, [authStatus])

  return isLoading ? <LoadingIndicator /> : <Component {...pageProps} />
}

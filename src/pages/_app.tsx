import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import { Path } from '../constants/path'
import { checkIsLoading } from '../utils/checkIsLoading'
import { LoadingIndicator } from '../components/LoadingIndicator'

import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'
Amplify.configure(awsExports)

export default function App(props: AppProps) {
  return (
    <Authenticator.Provider>
      <MyApp {...props} />
    </Authenticator.Provider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus, router.pathname)

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.push(Path.Landingpage)
    }
    if (authStatus === 'authenticated') {
      router.push(Path.Day)
    }
    // eslint-disable-next-line no-unused-vars
  }, [authStatus])

  return <>{isLoading ? <LoadingIndicator /> : <Component {...pageProps} />}</>
}

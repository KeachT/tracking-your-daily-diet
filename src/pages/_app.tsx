import type { AppProps } from 'next/app'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import { LandingPage } from '../features/landingpage/LandingPage'

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
  const { authStatus } = useAuthenticator((context) => [context.user])

  return (
    <>
      {authStatus === 'authenticated' ? (
        <Component {...pageProps} />
      ) : (
        <LandingPage />
      )}
    </>
  )
}

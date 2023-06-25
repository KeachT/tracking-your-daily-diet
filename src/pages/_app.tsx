import type { AppProps } from 'next/app'
import { Authenticator } from '@aws-amplify/ui-react'
import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'

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
  return <Component {...pageProps} />
}

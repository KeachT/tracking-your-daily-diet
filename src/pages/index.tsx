import { useAuthenticator } from '@aws-amplify/ui-react'
import { Dashboard } from '../features/dashboard/Dashboard'
import { LandingPage } from '../features/landingpage/LandingPage'

export default function Home() {
  const { authStatus } = useAuthenticator((context) => [context.user])

  return <>{authStatus === 'authenticated' ? <Dashboard /> : <LandingPage />}</>
}

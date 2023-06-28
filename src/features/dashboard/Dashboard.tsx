import { useAuthenticator } from '@aws-amplify/ui-react'
import { Layout } from '../../components/layout/Layout'

export const Dashboard = () => {
  const { user } = useAuthenticator()

  return (
    <Layout title="DashBoard">
      {user && <p>こんにちは！{user.username}</p>}
    </Layout>
  )
}

import { useAuthenticator } from '@aws-amplify/ui-react'
import { Layout } from '../components/layout/Layout'

const Day = () => {
  const { user } = useAuthenticator()

  return (
    <Layout title="Day">
      Day, {user && <p>こんにちは！{user.username}</p>}
    </Layout>
  )
}

export default Day

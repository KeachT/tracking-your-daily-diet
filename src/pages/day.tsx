import { useAuthenticator } from '@aws-amplify/ui-react'
import { Layout } from '../components/layout/Layout'
import { DailyNutrition } from '../features/dailynutrition/DailyNutrition'

const Day = () => {
  const { user } = useAuthenticator()

  return (
    <Layout title="Day">
      Day, {user && <p>こんにちは！{user.username}</p>}
      <DailyNutrition />
    </Layout>
  )
}

export default Day

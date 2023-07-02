// import { useAuthenticator } from '@aws-amplify/ui-react'
import { Text } from '@mantine/core'
import { Layout } from '../components/layout/Layout'
import { DailyNutrition } from '../features/dailynutrition/DailyNutrition'

const Day = () => {
  // const { user } = useAuthenticator()

  return (
    <Layout title="Day">
      {/* Day, {user && <p>こんにちは！{user.username}</p>} */}
      <Text weight={200} size="xl" className="mb-4">
        DailyNutritions
      </Text>
      <DailyNutrition />
    </Layout>
  )
}

export default Day

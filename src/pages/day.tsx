import { Box, Text } from '@mantine/core'

import { Layout } from '../components/Layout'
import { DatePickerCard } from '../features/date-picker-card'
import { MealForm } from '../features/meal-form'
import { Nutritions } from '../features/nutritions'

export default function Day() {
  return (
    <Layout title="Day">
      <Box maw={300} mb={50}>
        <DatePickerCard />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Daily Nutritions
        </Text>
        <Nutritions />
      </Box>

      <Box maw={700} mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Daily Meals
        </Text>
        <MealForm />
      </Box>
    </Layout>
  )
}

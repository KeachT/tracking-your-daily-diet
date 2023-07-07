import { useState } from 'react'
import type { NextPage } from 'next'
import { Box, Text } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { Layout } from '../components/layout/Layout'
import { DailyNutrition } from '../features/dailynutrition/DailyNutrition'
import { MealForm } from '../features/mealform/MealForm'

const Day: NextPage = () => {
  // const { user } = useAuthenticator()
  const [value, setValue] = useState<Date | null>(new Date())

  return (
    <Layout title="Day">
      <Box mb={50}>
        <Text weight={200} size="xl" mb={20}>
          Date
        </Text>
        <DatePickerInput
          valueFormat="YYYY-MM-DD"
          placeholder="Pick date"
          value={value}
          onChange={setValue}
          maw={200}
        />
      </Box>

      <Box mb={50}>
        <Text weight={200} size="xl" mb={20}>
          DailyNutritions
        </Text>
        <DailyNutrition />
      </Box>

      <MealForm />
    </Layout>
  )
}

export default Day

import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { PresetMealForm } from '../features/preset-meal-form'
import { PresetNutritions } from '../features/preset-nutritions'

export default function Preset() {
  return (
    <Layout title="プリセット">
      <Box maw={700} mb={30}>
        <PresetNutritions />
      </Box>

      <Box maw={700} mt={30}>
        <PresetMealForm />
      </Box>
    </Layout>
  )
}

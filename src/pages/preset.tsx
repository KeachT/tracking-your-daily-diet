import { Box } from '@mantine/core'

import { Layout } from '../components/Layout'
import { Robots } from '../constants'
import { PresetHeader } from '../features/preset-header'
import { PresetMealForm } from '../features/preset-meal-form'
import { PresetNutritions } from '../features/preset-nutritions'
import { PresetSwitcher } from '../features/preset-switcher'

export default function PresetPage() {
  return (
    <Layout title="プリセット" robots={Robots.NoindexNofollow}>
      <Box maw={300} mb={30}>
        <PresetHeader />
      </Box>

      <Box maw={700} mb={30}>
        <PresetSwitcher />
      </Box>

      <Box maw={700} mb={30}>
        <PresetNutritions />
      </Box>

      <Box maw={700} mt={30}>
        <PresetMealForm />
      </Box>
    </Layout>
  )
}

import { Box, Text } from '@mantine/core'

import { useNutritionNumbersStore } from '../../../stores'
import { Nutritions } from '../../nutritions'

export function DailyNutritions() {
  const { dailyCalories, dailyProtein, dailyFat, dailyCarbohydrates } =
    useNutritionNumbersStore()

  return (
    <Box>
      <Text fw={200} size="xl" mb={10}>
        Daily Nutritions
      </Text>

      <Nutritions
        dailyCalories={dailyCalories}
        dailyProtein={dailyProtein}
        dailyFat={dailyFat}
        dailyCarbohydrates={dailyCarbohydrates}
      />
    </Box>
  )
}

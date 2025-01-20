import { Box, ScrollArea, Text } from '@mantine/core'
import { Bar, BarChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'

import {
  useCurrentDateStore,
  useDailyGoalStore,
  useWeeklyMealRecordsStore,
} from '../../../stores'
import {
  createWeeklyNutritionsData,
  determineYLimit,
  getMaxCalories,
} from '../utils'

export function WeeklyCaloriesChart() {
  const { dailyGoal } = useDailyGoalStore()
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealRecords } = useWeeklyMealRecordsStore()

  const dailyGoalCalories = dailyGoal?.calories || 0
  const weeklyNutritionsData = createWeeklyNutritionsData(
    weeklyMealRecords,
    currentDate
  )
  const maxCalories = getMaxCalories(weeklyNutritionsData)
  const yLimit = determineYLimit(maxCalories, dailyGoalCalories)

  return (
    <Box>
      <Text fw={200} size="xl" mb={10}>
        Weekly Calories Chart
      </Text>

      <ScrollArea maw={700} h={500} mb={50}>
        <BarChart width={700} height={400} data={weeklyNutritionsData}>
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, yLimit]}
            ticks={[dailyGoalCalories, maxCalories]}
          />
          <Tooltip />
          <ReferenceLine y={maxCalories} />
          <ReferenceLine y={dailyGoalCalories} stroke="red" />
          <Bar dataKey="calories" fill="#845ef7" barSize={30} />
          <Bar dataKey="protein" fill="#ff6b6b" activeBar={false} barSize={0} />
          <Bar dataKey="fat" fill="#fcc419" activeBar={false} barSize={0} />
          <Bar
            dataKey="carbohydrates"
            fill="#20c997"
            activeBar={false}
            barSize={0}
          />
        </BarChart>
      </ScrollArea>
    </Box>
  )
}

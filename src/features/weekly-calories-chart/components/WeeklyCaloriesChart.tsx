import { Box, ScrollArea, Text } from '@mantine/core'
import { Bar, BarChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'

import {
  useCurrentDateStore,
  useDailyGoalStore,
  useWeeklyMealRecordsStore,
} from '../../../stores'
import {
  createWeeklyCaloriesData,
  determineYLimit,
  generateYAxisTicks,
  getMaxCalories,
} from '../utils'

export function WeeklyCaloriesChart() {
  const { dailyGoal } = useDailyGoalStore()
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealRecords } = useWeeklyMealRecordsStore()

  const dailyGoalCalories = dailyGoal?.calories || 0
  const weeklyCaloriesData = createWeeklyCaloriesData(
    weeklyMealRecords,
    currentDate
  )
  const maxCalories = getMaxCalories(weeklyCaloriesData)
  const yLimit = determineYLimit(maxCalories, dailyGoalCalories)
  const ticks = generateYAxisTicks(maxCalories, dailyGoalCalories)

  return (
    <Box>
      <Text fw={200} size="xl" mb={10}>
        Weekly Calories Chart
      </Text>

      <ScrollArea maw={700} h={500} mb={50}>
        <BarChart width={700} height={400} data={weeklyCaloriesData}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, yLimit]} ticks={ticks} />
          <Tooltip />
          <ReferenceLine y={maxCalories} key="max-calories" />
          <ReferenceLine y={dailyGoalCalories} stroke="red" key="daily-goal" />
          <ReferenceLine y={dailyGoalCalories / 2} key="half-daily-goal" />
          <Bar dataKey="calories" fill="#845ef7" barSize={30} />
        </BarChart>
      </ScrollArea>
    </Box>
  )
}

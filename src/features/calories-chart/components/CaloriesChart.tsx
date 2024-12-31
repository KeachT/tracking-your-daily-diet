import { Bar, BarChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'

import { useCurrentDateStore } from '../../../stores/currentDate'
import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { useWeeklyMealRecordsStore } from '../../../stores/weeklyMealRecords'
import {
  createWeeklyCaloriesData,
  determineYLimit,
  generateYAxisTicks,
  getMaxCalories,
} from '../utils'

export function CaloriesChart() {
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
    <BarChart width={600} height={400} data={weeklyCaloriesData}>
      <XAxis dataKey="name" />
      <YAxis domain={[0, yLimit]} ticks={ticks} />
      <Tooltip />
      <ReferenceLine y={maxCalories} key="max-calories" />
      <ReferenceLine y={dailyGoalCalories} stroke="red" key="daily-goal" />
      <ReferenceLine y={dailyGoalCalories / 2} key="half-daily-goal" />
      <Bar dataKey="calories" fill="#845ef7" barSize={30} />
    </BarChart>
  )
}

import { Bar, BarChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'

import { useCurrentDateStore } from '../../../stores/currentDate'
import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { useWeeklyMealDates } from '../../../stores/weeklyMealDates'
import {
  createWeeklyCaloriesData,
  determineYLimit,
  generateYAxisTicks,
  getMaxCalories,
} from '../utils'

export function CaloriesChart() {
  const { dailyGoal } = useDailyGoalStore()
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealDates } = useWeeklyMealDates()

  const dailyGoalCalories = dailyGoal?.calories || 0
  const weeklyCaloriesData: any = createWeeklyCaloriesData(
    weeklyMealDates,
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
      <ReferenceLine y={maxCalories} />
      <ReferenceLine y={dailyGoalCalories} stroke="red" />
      <ReferenceLine y={dailyGoalCalories / 2} />
      <Bar dataKey="calories" fill="#845ef7" barSize={30} />
    </BarChart>
  )
}

import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { useCurrentDateStore } from '../../../stores/currentDate'
import { useDailyGoalStore } from '../../../stores/dailyGoal'
import { useWeeklyMealDates } from '../../../stores/weeklyMealDates'
import { createWeeklyCaloriesData } from '../utils'

export function CaloriesChart() {
  const { dailyGoal } = useDailyGoalStore()
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealDates } = useWeeklyMealDates()

  const weeklyCaloriesData: any = createWeeklyCaloriesData(
    weeklyMealDates,
    currentDate
  )

  const dailyGoalCalories = dailyGoal?.calories || 0

  return (
    <BarChart
      width={700}
      height={400}
      data={weeklyCaloriesData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, dailyGoalCalories]} />
      <Tooltip />
      <ReferenceLine y={dailyGoalCalories} stroke="red" />
      <Bar dataKey="calories" fill="#9775fa" />
    </BarChart>
  )
}

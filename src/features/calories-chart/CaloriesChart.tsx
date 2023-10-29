import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import { useCurrentDateStore } from '../../stores/currentDate'
import { useDailyGoalStore } from '../../stores/dailyGoal'
import { useWeeklyMealDates } from '../../stores/weeklyMealDates'
import { createWeeklyCaloriesData } from './utils'

export function CaloriesChart() {
  const { dailyGoal } = useDailyGoalStore()
  const { currentDate } = useCurrentDateStore()
  const { weeklyMealDates } = useWeeklyMealDates()

  const weeklyCaloriesData: any = createWeeklyCaloriesData(
    weeklyMealDates,
    dailyGoal,
    currentDate
  )

  return (
    <LineChart
      width={750}
      height={300}
      data={weeklyCaloriesData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line
        type="basis"
        dot={false}
        dataKey="calories"
        stroke="#8884d8"
        strokeWidth={1.2}
      />
      <Line
        type="monotone"
        dot={false}
        dataKey="DailyGoal"
        stroke="#e627a0"
        strokeWidth={1.2}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis dataKey="max" />
      <Tooltip />
    </LineChart>
  )
}

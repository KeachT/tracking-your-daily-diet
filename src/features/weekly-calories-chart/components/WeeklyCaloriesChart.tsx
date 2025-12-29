import { ScrollArea } from '@mantine/core'
import { Bar, BarChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import {
  useCurrentDateStore,
  useDailyGoalStore,
  useLoadingStateStore,
  useWeeklyDailyMealRecordsStore,
} from '../../../stores'
import {
  createWeeklyNutritionsDataFromDailyMealRecords,
  determineYLimit,
  getMaxCalories,
} from '../utils'
import { CustomTooltip } from './CustomTooltip'

export function WeeklyCaloriesChart() {
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)
  const dailyGoal = useDailyGoalStore((state) => state.dailyGoal)
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const weeklyDailyMealRecords = useWeeklyDailyMealRecordsStore(
    (state) => state.weeklyDailyMealRecords
  )

  const weeklyNutritionsData = createWeeklyNutritionsDataFromDailyMealRecords(
    weeklyDailyMealRecords,
    currentDate
  )
  const dailyGoalCalories = dailyGoal?.calories || 0
  const maxCalories = getMaxCalories(weeklyNutritionsData)
  const yLimit = determineYLimit(maxCalories, dailyGoalCalories)

  if (isDataLoading) {
    return <LoadingSkeleton height={400} />
  }

  return (
    <ScrollArea maw={700} h={500} mb={50}>
      <BarChart width={700} height={400} data={weeklyNutritionsData}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, yLimit]} ticks={[dailyGoalCalories, maxCalories]} />
        <Tooltip content={<CustomTooltip />} />
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
  )
}

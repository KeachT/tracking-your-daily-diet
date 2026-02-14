import { BarChart } from '@mantine/charts'
import { ScrollArea } from '@mantine/core'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import {
  useCurrentDateStore,
  useDailyGoalStore,
  useLoadingStateStore,
  useWeeklyDailyMealRecordsStore,
} from '../../../stores'
import {
  createWeeklyCaloriesChartReferenceLines,
  createWeeklyCaloriesChartYAxisTicks,
  createWeeklyNutritionsDataFromDailyMealRecords,
  determineYLimit,
  getMaxCalories,
  WEEKLY_CALORIES_CHART,
  WEEKLY_CALORIES_CHART_SCROLL_AREA,
  weeklyCaloriesSeries,
} from '../utils'
import { CustomTooltip } from './CustomTooltip'
import { HoverCursor } from './HoverCursor'

export function WeeklyCaloriesChart() {
  const isDataLoading = useLoadingStateStore((state) => state.isDataLoading)
  const dailyGoal = useDailyGoalStore((state) => state.dailyGoal)
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const weeklyDailyMealRecords = useWeeklyDailyMealRecordsStore(
    (state) => state.weeklyDailyMealRecords,
  )

  const weeklyNutritionsData = createWeeklyNutritionsDataFromDailyMealRecords(
    weeklyDailyMealRecords,
    currentDate,
  )
  const dailyGoalCalories = dailyGoal?.calories || 0
  const maxCalories = getMaxCalories(weeklyNutritionsData)
  const yLimit = determineYLimit(maxCalories, dailyGoalCalories)
  const yAxisTicks = createWeeklyCaloriesChartYAxisTicks(
    dailyGoalCalories,
    maxCalories,
  )
  const referenceLines = createWeeklyCaloriesChartReferenceLines(
    dailyGoalCalories,
    maxCalories,
  )

  if (isDataLoading) {
    return <LoadingSkeleton height={400} />
  }

  return (
    <ScrollArea
      maw={WEEKLY_CALORIES_CHART_SCROLL_AREA.maxWidth}
      h={WEEKLY_CALORIES_CHART_SCROLL_AREA.height}
      mb={WEEKLY_CALORIES_CHART_SCROLL_AREA.marginBottom}
    >
      <BarChart
        w={WEEKLY_CALORIES_CHART.width}
        h={WEEKLY_CALORIES_CHART.height}
        data={weeklyNutritionsData}
        dataKey="name"
        series={weeklyCaloriesSeries}
        barProps={{ barSize: WEEKLY_CALORIES_CHART.barSize }}
        yAxisProps={{
          domain: [0, yLimit],
          ticks: yAxisTicks,
        }}
        tooltipProps={{
          content: <CustomTooltip />,
          cursor: <HoverCursor barSize={WEEKLY_CALORIES_CHART.barSize} />,
        }}
        referenceLines={referenceLines}
      />
    </ScrollArea>
  )
}

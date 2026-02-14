/**
 * Base sizing configuration for the weekly calories chart.
 *
 * `barSize` is also used by the hover cursor to keep the highlight aligned with bars.
 */
export const WEEKLY_CALORIES_CHART = {
  barSize: 50,
  height: 400,
  width: 700,
} as const

/**
 * ScrollArea configuration for the weekly chart container.
 *
 * Kept in sync with the chart width to make horizontal scrolling predictable.
 */
export const WEEKLY_CALORIES_CHART_SCROLL_AREA = {
  height: 500,
  marginBottom: 50,
  maxWidth: 700,
} as const

/**
 * Mantine Charts `BarChart` series configuration.
 *
 * Currently renders only `calories` (other nutrients are displayed in the tooltip).
 */
export const weeklyCaloriesSeries = [{ name: 'calories', color: 'violet.6' }]

/**
 * Creates Y-axis ticks for the weekly calories chart.
 *
 * @param dailyGoalCalories - Daily calorie goal.
 * @param maxCalories - Maximum calories within the week.
 * @returns Unique ticks filtered to finite, non-negative numbers.
 */
export const createWeeklyCaloriesChartYAxisTicks = (
  dailyGoalCalories: number,
  maxCalories: number,
): number[] => {
  const ticks = [dailyGoalCalories, maxCalories].filter(
    (value) => Number.isFinite(value) && value >= 0,
  )
  return Array.from(new Set(ticks)).sort((a, b) => a - b)
}

/**
 * Creates reference lines for the weekly calories chart.
 *
 * @param dailyGoalCalories - Daily calorie goal (rendered in red).
 * @param maxCalories - Maximum calories within the week.
 * @returns Reference line definitions filtered to finite, non-negative numbers.
 */
export const createWeeklyCaloriesChartReferenceLines = (
  dailyGoalCalories: number,
  maxCalories: number,
) => {
  const lines = [{ y: maxCalories }, { y: dailyGoalCalories, color: 'red' }]
  return lines.filter((line) => Number.isFinite(line.y) && line.y >= 0)
}

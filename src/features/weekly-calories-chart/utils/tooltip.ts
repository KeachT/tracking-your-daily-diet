import type { MantineTheme } from '@mantine/core'

import type { WeeklyNutritionsData } from '../types'

/**
 * Nutrient keys that can be displayed in the weekly tooltip.
 *
 * `name` is excluded because it is used for the X-axis label.
 */
export type WeeklyNutritionKey = keyof Omit<WeeklyNutritionsData, 'name'>

type TooltipItemDescriptor = {
  color: { palette: keyof MantineTheme['colors']; shade: number }
  key: WeeklyNutritionKey
  label: string
  unit: string
}

/**
 * Tooltip item definitions (order, labels, units, and theme-based colors).
 */
export const weeklyNutritionTooltipItems: TooltipItemDescriptor[] = [
  {
    key: 'calories',
    label: 'カロリー',
    unit: 'Kcal',
    color: { palette: 'violet', shade: 6 },
  },
  {
    key: 'protein',
    label: 'タンパク質',
    unit: 'g',
    color: { palette: 'red', shade: 6 },
  },
  {
    key: 'fat',
    label: '脂質',
    unit: 'g',
    color: { palette: 'yellow', shade: 6 },
  },
  {
    key: 'carbohydrates',
    label: '炭水化物',
    unit: 'g',
    color: { palette: 'teal', shade: 6 },
  },
]

const weeklyNutritionFormatter = new Intl.NumberFormat('ja-JP', {
  maximumFractionDigits: 2,
})

/**
 * Formats a numeric value for display in the tooltip.
 *
 * Uses `Intl.NumberFormat` to standardize grouping and up to 2 fractional digits.
 */
export const formatWeeklyNutritionValue = (value: number) =>
  weeklyNutritionFormatter.format(value)

/**
 * Resolves the tooltip text color from Mantine theme.
 *
 * Falls back to `theme.black` if the palette/shade is missing.
 */
export const resolveWeeklyNutritionTooltipColor = (
  theme: MantineTheme,
  item: TooltipItemDescriptor,
) => theme.colors[item.color.palette]?.[item.color.shade] ?? theme.black

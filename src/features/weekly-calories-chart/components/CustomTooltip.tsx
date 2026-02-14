import { useMantineTheme } from '@mantine/core'

import styles from '../styles/CustomTooltip.module.css'
import { WeeklyNutritionsData } from '../types'
import {
  formatWeeklyNutritionValue,
  resolveWeeklyNutritionTooltipColor,
  weeklyNutritionTooltipItems,
} from '../utils'

type CustomTooltipProps = {
  active?: boolean
  payload?: Array<{ payload?: WeeklyNutritionsData }>
}

export function CustomTooltip({ active, payload }: CustomTooltipProps) {
  const theme = useMantineTheme()
  const data = payload?.[0]?.payload

  if (!active || !data) return null

  return (
    <div className={styles.tooltip}>
      {weeklyNutritionTooltipItems.map((item) => (
        <p
          key={item.key}
          className={styles.tooltipItem}
          style={{
            color: resolveWeeklyNutritionTooltipColor(theme, item),
          }}
        >
          {`${item.label} ${formatWeeklyNutritionValue(data[item.key])}${item.unit}`}
        </p>
      ))}
    </div>
  )
}

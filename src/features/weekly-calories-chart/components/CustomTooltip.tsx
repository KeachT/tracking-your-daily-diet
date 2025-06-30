import { TooltipProps } from 'recharts'

import styles from '../styles/CustomTooltip.module.css'

type CustomTooltipProps = TooltipProps<number, string>

export function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const nutritionLabels: { [key: string]: string } = {
      calories: 'カロリー',
      protein: 'タンパク質',
      fat: '脂質',
      carbohydrates: '炭水化物',
    }
    return (
      <div className={styles.tooltip}>
        {payload.map((entry: any, index: number) => {
          const unit = entry.dataKey === 'calories' ? 'Kcal' : 'g'
          const label = nutritionLabels[entry.dataKey] || entry.dataKey
          return (
            <p
              key={index}
              className={styles.tooltipItem}
              style={{
                color: entry.color,
              }}
            >
              {`${label}: ${entry.value}${unit}`}
            </p>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}

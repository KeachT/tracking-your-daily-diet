import { useMantineTheme } from '@mantine/core'

import { WEEKLY_CALORIES_CHART } from '../utils'

type HoverCursorProps = {
  barSize?: number
  height?: number
  width?: number
  x?: number
  y?: number
}

export function HoverCursor({
  x,
  y,
  width,
  height,
  barSize,
}: HoverCursorProps) {
  const theme = useMantineTheme()

  if (x == null || y == null || height == null) return null

  const configuredBarSize = barSize ?? WEEKLY_CALORIES_CHART.barSize
  const bandWidth = width ?? configuredBarSize
  const cursorWidth = Math.min(configuredBarSize, bandWidth)
  const cursorX = x + (bandWidth - cursorWidth) / 2

  return (
    <rect
      x={cursorX}
      y={y}
      width={cursorWidth}
      height={height}
      fill={theme.colors.gray[3]}
      fillOpacity={0.45}
    />
  )
}

import { useMantineTheme } from '@mantine/core'
import {
  IconBaguette,
  IconChartDonut,
  IconMoon,
  IconSunHigh,
} from '@tabler/icons-react'

import { MealCategoryName } from '../../models'

type CategoryIcons = {
  [key: string]: JSX.Element
}

type MealIconProps = {
  mealCategoryName: string
}

export function MealIcon({ mealCategoryName }: MealIconProps) {
  const theme = useMantineTheme()
  const getColor = (color: string) => theme.colors[color][7]

  const categoryIcons: CategoryIcons = {
    [MealCategoryName.BREAKFAST]: (
      <IconSunHigh size={20} color={getColor('red')} />
    ),
    [MealCategoryName.LUNCH]: (
      <IconBaguette size={20} color={getColor('yellow')} />
    ),
    [MealCategoryName.DINNER]: (
      <IconMoon size={20} color={getColor('violet')} />
    ),
    [MealCategoryName.SNACK]: (
      <IconChartDonut size={20} color={getColor('green')} />
    ),
  }

  const icon = categoryIcons[mealCategoryName]

  return icon || null
}

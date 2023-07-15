import { rem, useMantineTheme } from '@mantine/core'
import {
  IconSunHigh,
  IconBaguette,
  IconMoon,
  IconChartDonut,
} from '@tabler/icons-react'
import { MealCategoryName } from '@/API'

type CategoryIcons = {
  [key: string]: JSX.Element
}

type MealIconProps = {
  mealCategoryName: string
}

export function MealIcon({ mealCategoryName }: MealIconProps) {
  const theme = useMantineTheme()
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7]

  const categoryIcons: CategoryIcons = {
    [MealCategoryName.BREAKFAST]: (
      <IconSunHigh size={rem(20)} color={getColor('red')} />
    ),
    [MealCategoryName.LUNCH]: (
      <IconBaguette size={rem(20)} color={getColor('yellow')} />
    ),
    [MealCategoryName.DINNER]: (
      <IconMoon size={rem(20)} color={getColor('violet')} />
    ),
    [MealCategoryName.SNACK]: (
      <IconChartDonut size={rem(20)} color={getColor('green')} />
    ),
  }

  const icon = categoryIcons[mealCategoryName]

  return icon || null
}

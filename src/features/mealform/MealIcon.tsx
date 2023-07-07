import { FC } from 'react'
import { rem, useMantineTheme } from '@mantine/core'
import {
  IconSunHigh,
  IconBaguette,
  IconMoon,
  IconChartDonut,
} from '@tabler/icons-react'
import { MealCategoryName } from '@/API'

interface CategoryIcons {
  [key: string]: JSX.Element
}

interface MealIconProps {
  mealCategoryName: string
}

export const MealIcon: FC<MealIconProps> = ({ mealCategoryName }) => {
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

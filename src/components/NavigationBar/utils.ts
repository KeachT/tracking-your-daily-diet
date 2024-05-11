import { createStyles, getStylesRef } from '@mantine/emotion'
import {
  IconAdjustmentsHorizontal,
  IconBoxMultiple7,
  IconClockHour9,
} from '@tabler/icons-react'

import { Path } from '../../constants/path'

export const createLinkItems = () => [
  { path: Path.Day, label: 'Day', icon: IconClockHour9 },
  { path: Path.Week, label: 'Week', icon: IconBoxMultiple7 },
  { path: Path.Settings, label: 'Settings', icon: IconAdjustmentsHorizontal },
]

export const createNavigationBarStyle = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${16} solid ${theme.colors.gray[2]}`,
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:focus': {
      outline: `2px solid ${theme.colors[theme.primaryColor][9]}`,
    },

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors[theme.primaryColor][1],
      color: theme.colors[theme.primaryColor][9],
      [`& .${getStylesRef('icon')}`]: {
        color: theme.colors[theme.primaryColor][9],
      },
    },
  },
}))

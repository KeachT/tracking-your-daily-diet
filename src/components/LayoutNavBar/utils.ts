import {
  IconAdjustmentsHorizontal,
  IconAlbum,
  IconBoxMultiple7,
  IconClockHour9,
} from '@tabler/icons-react'

import { Path } from '../../constants'

export const createLinkItems = () => [
  { path: Path.Day, label: 'Day', icon: IconClockHour9 },
  { path: Path.Week, label: 'Week', icon: IconBoxMultiple7 },
  { path: Path.Preset, label: 'Preset', icon: IconAlbum },
  { path: Path.Settings, label: 'Settings', icon: IconAdjustmentsHorizontal },
]

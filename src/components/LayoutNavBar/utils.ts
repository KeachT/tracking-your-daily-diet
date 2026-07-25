import {
  IconAdjustmentsHorizontal,
  IconAlbum,
  IconBoxMultiple7,
  IconClockHour9,
  IconSettings,
} from '@tabler/icons-react'

import { Path } from '../../constants'

export const createLinkItems = () => [
  { path: Path.Day, label: '日別', icon: IconClockHour9 },
  { path: Path.Week, label: '週間', icon: IconBoxMultiple7 },
  { path: Path.Preset, label: 'プリセット', icon: IconAlbum },
  { path: Path.DailyGoal, label: '目標設定', icon: IconAdjustmentsHorizontal },
  { path: Path.Settings, label: '設定', icon: IconSettings },
]

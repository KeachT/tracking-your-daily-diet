import {
  IconAdjustmentsHorizontal,
  IconAlbum,
  IconBoxMultiple7,
  IconClockHour9,
} from '@tabler/icons-react'

import { Path } from '../../constants'

export const createLinkItems = () => [
  { path: Path.Day, label: '日別記録', icon: IconClockHour9 },
  { path: Path.Week, label: '週間レポート', icon: IconBoxMultiple7 },
  { path: Path.Preset, label: 'プリセット', icon: IconAlbum },
  { path: Path.Settings, label: '目標設定', icon: IconAdjustmentsHorizontal },
]

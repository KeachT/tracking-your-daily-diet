import {
  IconAdjustmentsHorizontal,
  IconAlbum,
  IconBoxMultiple7,
  IconClockHour9,
  IconFileDescription,
  IconShieldLock,
} from '@tabler/icons-react'

import { Path } from '../../constants'

export const createLinkItems = () => [
  { path: Path.Day, label: '日別', icon: IconClockHour9 },
  { path: Path.Week, label: '週間', icon: IconBoxMultiple7 },
  { path: Path.Preset, label: 'プリセット', icon: IconAlbum },
  { path: Path.Settings, label: '目標設定', icon: IconAdjustmentsHorizontal },
  { path: Path.Terms, label: '利用規約', icon: IconFileDescription },
  { path: Path.PrivacyPolicy, label: 'プライバシー', icon: IconShieldLock },
]

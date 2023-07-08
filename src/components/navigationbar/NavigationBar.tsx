import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Group, Title } from '@mantine/core'
import {
  IconAdjustmentsHorizontal,
  IconAlignBoxBottomCenter,
  IconBoxMultiple7,
  IconClockHour9,
  IconLogout,
} from '@tabler/icons-react'
import { navigationBarStyle } from './navigationBarStyle'
import { useHandleSignOut } from './useHandleSignOut'
import { Path } from '../../constants/path'

const linkItems = [
  { path: Path.Day, label: 'Day', icon: IconClockHour9 },
  { path: Path.Week, label: 'Week', icon: IconBoxMultiple7 },
  { path: Path.Month, label: 'Month', icon: IconAlignBoxBottomCenter },
  { path: Path.Settings, label: 'Settings', icon: IconAdjustmentsHorizontal },
]

export function NavigationBar() {
  const router = useRouter()
  const handleSignOut = useHandleSignOut()
  const { classes, cx } = navigationBarStyle()

  const links = linkItems.map((linkItem) => {
    return (
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: linkItem.path === router.pathname,
        })}
        href={linkItem.path}
        key={linkItem.label}
      >
        <linkItem.icon className={classes.linkIcon} stroke={1.5} />
        <span>{linkItem.label}</span>
      </Link>
    )
  })

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={3} weight={100}>
            Tracking Your Daily Diet
          </Title>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link
          href="#"
          className={classes.link}
          onClick={(event) => {
            handleSignOut()
            event.preventDefault()
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  )
}

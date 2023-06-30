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
import { useNavigationBarStyle } from './useNavigationBarStyle'
import { useHandleSignOut } from './useHandleSignOut'
import { Path } from '../../constants/path'

const data = [
  { link: Path.Day, label: 'Day', icon: IconClockHour9 },
  { link: Path.Week, label: 'Week', icon: IconBoxMultiple7 },
  { link: Path.Month, label: 'Month', icon: IconAlignBoxBottomCenter },
  { link: Path.Settings, label: 'Settings', icon: IconAdjustmentsHorizontal },
]

export const NavigationBar = () => {
  const router = useRouter()
  const handleSignOut = useHandleSignOut()
  const { classes, cx } = useNavigationBarStyle()

  const links = data.map((item) => {
    return (
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: item.link === router.pathname,
        })}
        href={item.link}
        key={item.label}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    )
  })

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
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

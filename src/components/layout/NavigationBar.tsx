import Link from 'next/link'
import { useState } from 'react'
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

const data = [
  { link: '', label: 'Day', icon: IconClockHour9 },
  { link: '', label: 'Week', icon: IconBoxMultiple7 },
  { link: '', label: 'Month', icon: IconAlignBoxBottomCenter },
  { link: '', label: 'Settings', icon: IconAdjustmentsHorizontal },
]

export const NavigationBar = () => {
  const { classes, cx } = useNavigationBarStyle()
  const [active, setActive] = useState('Day')
  const handleSignOut = useHandleSignOut()

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ))

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

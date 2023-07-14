import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Group, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout } from '@tabler/icons-react'
import { createLinkItems, createNavigationBarStyle } from './utils'
import { LogoutModal } from './LogoutModal'

export function NavigationBar() {
  const router = useRouter()
  const [opened, { open, close }] = useDisclosure(false)
  const linkItems = createLinkItems()
  const { classes, cx } = createNavigationBarStyle()

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
        <Link href="/" className={classes.link} onClick={open}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Log out</span>
        </Link>
      </Navbar.Section>

      {opened && <LogoutModal opened={opened} close={close} />}
    </Navbar>
  )
}

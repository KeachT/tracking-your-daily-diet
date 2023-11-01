import { Box, Navbar } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout } from '@tabler/icons-react'

import { LogoutModal } from './LogoutModal'
import { NavigationBarLink } from './NavigationBarLink'
import { createLinkItems, createNavigationBarStyle } from './utils'

type NavigationBarProps = {
  navbarOpened: boolean
}

export function NavigationBar({ navbarOpened = false }: NavigationBarProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const { classes } = createNavigationBarStyle()
  const linkItems = createLinkItems()

  return (
    <Navbar
      p="sm"
      width={{ sm: 300 }}
      hiddenBreakpoint="sm"
      hidden={!navbarOpened}
    >
      <Navbar.Section grow>
        {linkItems.map((linkItem) => (
          <NavigationBarLink key={linkItem.label} linkItem={linkItem} />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Box className={`${classes.link} cursor-pointer`} onClick={open}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Log out</span>
        </Box>
      </Navbar.Section>

      {opened && <LogoutModal opened={opened} close={close} />}
    </Navbar>
  )
}

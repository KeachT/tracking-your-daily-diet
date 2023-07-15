import { Box, Group, Navbar, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout } from '@tabler/icons-react'
import { createLinkItems, createNavigationBarStyle } from './utils'
import { NavigationBarLink } from './NavigationBarLink'
import { LogoutModal } from './LogoutModal'

export function NavigationBar() {
  const [opened, { open, close }] = useDisclosure(false)
  const { classes } = createNavigationBarStyle()
  const linkItems = createLinkItems()

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={3} weight={100}>
            Tracking Your Daily Diet
          </Title>
        </Group>
        {linkItems.map((linkItem) => (
          <NavigationBarLink key={linkItem.label} linkItem={linkItem} />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Box className={classes.link} onClick={open}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Log out</span>
        </Box>
      </Navbar.Section>

      {opened && <LogoutModal opened={opened} close={close} />}
    </Navbar>
  )
}

import { Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import classes from '../styles/LayoutNavBar.module.css'
import { LayoutNavBarLinks } from './LayoutNavBarLinks'
import { LogoutLink } from './LogoutLink'
import { LogoutModal } from './LogoutModal'

export function LayoutNavBar() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <nav className={classes.navbar}>
      <Box className={classes.navbarMain}>
        <LayoutNavBarLinks />
      </Box>

      <Box className={classes.footer}>
        <LogoutLink open={open} />
      </Box>

      {opened && <LogoutModal opened={opened} close={close} />}
    </nav>
  )
}

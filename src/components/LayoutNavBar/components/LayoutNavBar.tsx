import { Badge, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconUserOff } from '@tabler/icons-react'

import { useGuestModeStore } from '../../../stores'
import classes from '../styles/LayoutNavBar.module.css'
import navLinkClasses from '../styles/LayoutNavBarLinks.module.css'
import { LayoutNavBarLinks } from './LayoutNavBarLinks'
import { LogoutLink } from './LogoutLink'
import { LogoutModal } from './LogoutModal'

export function LayoutNavBar() {
  const [opened, { open, close }] = useDisclosure(false)
  const { isGuestMode, exitGuestMode } = useGuestModeStore()

  return (
    <nav className={classes.navbar}>
      <Box className={classes.navbarMain}>
        {isGuestMode && (
          <Badge color="teal" variant="light" mb="sm" w="100%">
            ゲストモード
          </Badge>
        )}
        <LayoutNavBarLinks />
      </Box>

      <Box className={classes.footer}>
        {isGuestMode ? (
          <Box className={navLinkClasses.link} onClick={exitGuestMode}>
            <IconUserOff className={navLinkClasses.linkIcon} stroke={1.5} />
            <span>ゲストモード終了</span>
          </Box>
        ) : (
          <LogoutLink open={open} />
        )}
      </Box>

      {!isGuestMode && opened && <LogoutModal opened={opened} close={close} />}
    </nav>
  )
}

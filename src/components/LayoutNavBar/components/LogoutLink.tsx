import { Box } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'

import classes from '../styles/LayoutNavBarLinks.module.css'

type LogoutLinkProps = {
  open: () => void
}

export function LogoutLink({ open }: LogoutLinkProps) {
  return (
    <Box className={classes.link} onClick={open}>
      <IconLogout className={classes.linkIcon} stroke={1.5} />
      <span>Log out</span>
    </Box>
  )
}

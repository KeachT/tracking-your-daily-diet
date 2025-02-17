import { Box, Burger, Image, Title, useMantineTheme } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

import styles from './LayoutHeader.module.css'

type LayoutHeaderProps = {
  navbarOpened: boolean
  setNavbarOpened: Dispatch<SetStateAction<boolean>>
}

export function LayoutHeader({
  navbarOpened,
  setNavbarOpened,
}: LayoutHeaderProps) {
  const theme = useMantineTheme()

  return (
    <Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Burger
        opened={navbarOpened}
        onClick={() => setNavbarOpened((navbarOpened) => !navbarOpened)}
        size="sm"
        hiddenFrom="md"
        color={theme.colors.gray[6]}
      />

      <Box className={styles.iconContainer}>
        <Image src="/favicon.ico" alt="App Icon" />
      </Box>
      <Title order={3} w={800} fw={200}>
        Tracking Your Daily Diet
      </Title>
    </Box>
  )
}

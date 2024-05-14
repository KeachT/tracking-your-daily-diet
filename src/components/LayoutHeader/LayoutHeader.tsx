import { Box, Burger, Title, useMantineTheme } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

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
        hiddenFrom="sm"
        color={theme.colors.gray[6]}
      />
      <Title order={3} w={800} fw={200} m="md">
        Tracking Your Daily Diet
      </Title>
    </Box>
  )
}

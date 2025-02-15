import { Box, Burger, Image, Title, useMantineTheme } from '@mantine/core'
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
        hiddenFrom="md"
        color={theme.colors.gray[6]}
      />

      <Box mt={4} ml={10} mr={8}>
        <Image src="/favicon.ico" alt="App Icon" width={32} height={32} />
      </Box>
      <Title order={3} w={800} fw={200}>
        Tracking Your Daily Diet
      </Title>
    </Box>
  )
}

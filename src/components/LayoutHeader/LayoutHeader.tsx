import {
  Burger,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from '@mantine/core'
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
    <Header height={60} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={navbarOpened}
            onClick={() => setNavbarOpened((navbarOpened) => !navbarOpened)}
            size="sm"
            color={theme.colors.gray[6]}
          />
        </MediaQuery>

        <Title order={3} weight={200} m="sm">
          Tracking Your Daily Diet
        </Title>
      </div>
    </Header>
  )
}

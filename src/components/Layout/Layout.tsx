import { AppShell, Box, Container } from '@mantine/core'
import Head from 'next/head'
import { ReactNode, useState } from 'react'

import { LayoutFooter } from '../LayoutFooter'
import { LayoutHeader } from '../LayoutHeader'
import { LayoutNavBar } from '../LayoutNavBar'
import classes from './Layout.module.css'
import { useNavBarVisible } from './useNavBarVisible'

type LayoutProps = {
  title: string
  children: ReactNode
  showNavBar?: boolean
  centerContent?: boolean
  fullWidth?: boolean
  robots?: string
}

export function Layout({
  title = '',
  children,
  showNavBar = true,
  centerContent = false,
  fullWidth = false,
  robots,
}: LayoutProps) {
  const [navbarOpened, setNavbarOpened] = useState(false)
  const navBarVisible = useNavBarVisible(showNavBar)

  return (
    <Box>
      <Head>
        <title>{title}</title>
        {robots && <meta name="robots" content={robots} />}
      </Head>

      <AppShell
        navbar={
          navBarVisible
            ? {
                width: 300,
                breakpoint: 'md',
                collapsed: { mobile: !navbarOpened },
              }
            : undefined
        }
        header={{ height: 60 }}
        footer={{ height: 30 }}
      >
        <AppShell.Header>
          <LayoutHeader
            navbarOpened={navbarOpened}
            setNavbarOpened={setNavbarOpened}
            showBurger={navBarVisible}
          />
        </AppShell.Header>

        {navBarVisible && (
          <AppShell.Navbar>
            <LayoutNavBar />
          </AppShell.Navbar>
        )}

        <AppShell.Main className={centerContent ? classes.center : undefined}>
          {fullWidth ? (
            children
          ) : (
            <Container size="md" m="md">
              {children}
            </Container>
          )}
        </AppShell.Main>

        <AppShell.Footer>
          <LayoutFooter />
        </AppShell.Footer>
      </AppShell>
    </Box>
  )
}

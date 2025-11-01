import { AppShell, Box, Container } from '@mantine/core'
import Head from 'next/head'
import { ReactNode, useState } from 'react'

import { LayoutHeader } from '../LayoutHeader'
import { LayoutNavBar } from '../LayoutNavBar'
import classes from './Layout.module.css'

type LayoutProps = {
  title: string
  children: ReactNode
  showNavBar?: boolean
  centerContent?: boolean
}

export function Layout({
  title = '',
  children,
  showNavBar = true,
  centerContent = false,
}: LayoutProps) {
  const [navbarOpened, setNavbarOpened] = useState(false)

  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>

      <AppShell
        navbar={
          showNavBar
            ? {
                width: 300,
                breakpoint: 'md',
                collapsed: { mobile: !navbarOpened },
              }
            : undefined
        }
        header={{ height: 60 }}
      >
        <AppShell.Header>
          <LayoutHeader
            navbarOpened={navbarOpened}
            setNavbarOpened={setNavbarOpened}
          />
        </AppShell.Header>

        {showNavBar && (
          <AppShell.Navbar>
            <LayoutNavBar />
          </AppShell.Navbar>
        )}

        <AppShell.Main className={centerContent ? classes.center : undefined}>
          <Container size="md" m="md">
            {children}
          </Container>
        </AppShell.Main>
      </AppShell>
    </Box>
  )
}

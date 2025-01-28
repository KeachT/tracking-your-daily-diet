import { AppShell, Box, Container } from '@mantine/core'
import Head from 'next/head'
import { ReactNode, useState } from 'react'

import { LayoutNavBar } from '../../LayoutNavBar'
import { LayoutHeader } from './LayoutHeader'

type LayoutProps = {
  title: string
  children: ReactNode
}

export function Layout({ title = '', children }: LayoutProps) {
  const [navbarOpened, setNavbarOpened] = useState(false)

  return (
    <Box>
      <Head>
        <title>{`Tracking Your Daily Diet - ${title}`}</title>
      </Head>

      <AppShell
        navbar={{
          width: 300,
          breakpoint: 'md',
          collapsed: { mobile: !navbarOpened },
        }}
        header={{ height: 60 }}
        padding="lg"
      >
        <AppShell.Header>
          <LayoutHeader
            navbarOpened={navbarOpened}
            setNavbarOpened={setNavbarOpened}
          />
        </AppShell.Header>

        <AppShell.Navbar>
          <LayoutNavBar />
        </AppShell.Navbar>

        <AppShell.Main>
          <Container size="md" mx="auto">
            {children}
          </Container>
        </AppShell.Main>
      </AppShell>
    </Box>
  )
}

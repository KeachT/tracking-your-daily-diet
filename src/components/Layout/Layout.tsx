import { AppShell, Box } from '@mantine/core'
import Head from 'next/head'
import { ReactNode, useState } from 'react'

import { LayoutHeader } from '../LayoutHeader'
import { LayoutNavBar } from '../LayoutNavBar'

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

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </Box>
  )
}

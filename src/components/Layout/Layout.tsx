import { AppShell } from '@mantine/core'
import Head from 'next/head'
import { ReactNode, useState } from 'react'

import { LayoutHeader } from '../LayoutHeader'
import { NavigationBar } from '../NavigationBar'

type LayoutProps = {
  title: string
  children: ReactNode
}

export function Layout({ title = '', children }: LayoutProps) {
  const [navbarOpened, setNavbarOpened] = useState(false)

  return (
    <div>
      <Head>
        <title>{`Tracking Your Daily Diet - ${title}`}</title>
      </Head>

      <AppShell
        m={20}
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={<NavigationBar navbarOpened={navbarOpened} />}
        header={
          <LayoutHeader
            navbarOpened={navbarOpened}
            setNavbarOpened={setNavbarOpened}
          />
        }
      >
        {children}
      </AppShell>
    </div>
  )
}

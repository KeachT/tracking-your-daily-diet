import Head from 'next/head'
import { ReactNode } from 'react'
import { NavigationBar } from '../navigationbar/NavigationBar'
import { AppShell } from '@mantine/core'

type LayoutProps = {
  title: string
  children: ReactNode
}

export function Layout({ title = '', children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{`Tracking Your Daily Diet - ${title}`}</title>
      </Head>

      <header></header>

      <AppShell navbar={<NavigationBar />}>{children}</AppShell>

      <footer></footer>
    </div>
  )
}

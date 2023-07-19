import Head from 'next/head'
import { ReactNode } from 'react'
import { AppShell } from '@mantine/core'
import { NavigationBar } from '../NavigationBar'

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

      <AppShell navbar={<NavigationBar />} m={20}>
        {children}
      </AppShell>

      <footer></footer>
    </div>
  )
}

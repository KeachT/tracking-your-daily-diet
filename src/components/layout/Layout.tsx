import Head from 'next/head'
import { ReactNode } from 'react'
import { NavigationBar } from '../navigationbar/NavigationBar'

type LayoutProps = {
  title: string
  children: ReactNode
}

export function Layout({ title = '', children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>{`Tracking Your Daily Diet - ${title}`}</title>
      </Head>

      <header></header>

      <main className="flex">
        <NavigationBar />
        <div className="m-8">{children}</div>
      </main>

      <footer></footer>
    </div>
  )
}

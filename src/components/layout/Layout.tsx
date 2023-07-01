import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { NavigationBar } from '../navigationbar/NavigationBar'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ title = '', children }) => {
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

import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { NavigationBar } from './NavigationBar'

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
      <NavigationBar />
      <div className="m-8">{children}</div>
    </div>
  )
}

import Head from 'next/head'

import { LandingPage } from '../components/LandingPage'
import { Layout } from '../components/Layout'
import { Robots } from '../constants'

const LP_TITLE = 'Tracking Your Daily Diet — カロリーと栄養素を簡単管理'
const LP_DESCRIPTION =
  '食事管理を簡単に。カロリーと栄養素を可視化して、ダイエットをサポートするアプリ。'

export default function Lp() {
  return (
    <Layout
      title={LP_TITLE}
      showNavBar={false}
      fullWidth
      robots={Robots.IndexFollow}
    >
      <Head>
        <meta name="description" content={LP_DESCRIPTION} />
        <meta property="og:title" content={LP_TITLE} />
        <meta property="og:description" content={LP_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LandingPage />
    </Layout>
  )
}

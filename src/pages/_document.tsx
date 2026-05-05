import { ColorSchemeScript } from '@mantine/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <ColorSchemeScript defaultColorScheme="light" />
          <meta
            name="google-site-verification"
            content="wu5PnZMwqjjmlK2BE8AgE_L6Q988LZ_rqvb4jUtN484"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

import { ColorSchemeScript } from '@mantine/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <ColorSchemeScript defaultColorScheme="light" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

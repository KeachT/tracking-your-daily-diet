import createEmotionServer from '@emotion/server/create-instance'
import { ColorSchemeScript } from '@mantine/core'
import { createGetInitialProps } from '@mantine/emotion'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { emotionCache } from '../emotion/cache'

export default class _Document extends Document {
  render() {
    return (
      <Html lang="en">
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

const stylesServer = createEmotionServer(emotionCache)

_Document.getInitialProps = createGetInitialProps(Document, stylesServer)

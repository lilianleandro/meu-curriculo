import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lilian Leandro</title>
        <link rel="shortcut icon" href="/img/flower-pot.png" />
        <link rel="apple-touch-icon" href="/img/flower-pot.png" />{' '}
        <meta name="theme-color" content="#bd97ff" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

import GlobalStyle from './_globalStyle';

export default function App({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}

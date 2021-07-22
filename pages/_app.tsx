import '../styles/globals.css'
import type { AppProps } from 'next/app'

function UCHApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default UCHApp

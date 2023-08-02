import '../styles/globals.css'
import Providers from '../store/providers'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp

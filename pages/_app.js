import '../styles/globals.css'
import Providers from '../store/providers'
import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <NextNProgress color="#EA0028" height={3} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />
      <ScrollToTop width='16' height='16' smooth className='hidden lg:flex justify-center items-center rounded-full' />
    </Providers>
  )
}

export default MyApp

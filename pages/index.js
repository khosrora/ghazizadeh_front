import Head from "next/head";
import PublicLayout from "../components/layout/public";
import IndexPage from "../components/pages/HomePage/IndexPage";
import { BASE_API } from "../utils/baseApi";



export default function Home(props) {

  return (
    <>
      <Head>
        <title>گروه خودرویی غازی زاده</title>
        <meta property="url" content="https://ghazizadeh.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="فروشکاه قطعات خودرو" />
        <meta name="description" content="فروشگاه اینترنتی قطعات و لوازم جانبی خودرو" />
        <meta name="robots" content="index, follow" />
      </Head>
      <PublicLayout>
        <IndexPage props={props} />
      </PublicLayout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${BASE_API}/siteinfo/home_header/`);
  const resBanners = await fetch(`${BASE_API}/siteinfo/slider_and_banner/`);
  const resCategories = await fetch(`${BASE_API}/store/categories/`);

  const header = await res.json()
  const banners = await resBanners.json()
  const categories = await resCategories.json()

  return {
    props: {
      header,
      banners,
      categories
    }
  }
}
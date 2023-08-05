import PublicLayout from "../components/layout/public";
import IndexPage from "../components/pages/HomePage/IndexPage";
import { BASE_API } from "../utils/baseApi";
import http from "../utils/httpService";


export default function Home(props) {

  return (
    <PublicLayout>
      <IndexPage props={props} />
    </PublicLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${BASE_API}/siteinfo/home_header/`);
  const resBanners = await fetch(`${BASE_API}/siteinfo/slider_and_banner/`);

  const header = await res.json()
  const banners = await resBanners.json()

  return {
    props: {
      header,
      banners,
    }
  }
}
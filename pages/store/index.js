import Head from 'next/head';
import React from 'react'
import PublicLayout from '../../components/layout/public'
import StoreIndex from '../../components/pages/StorePage/StoreIndex'
import { BASE_API } from '../../utils/baseApi';

function index(props) {

    return (
        <>
            <Head>
                <title>فروشگاه گروه خودرویی غازی زاده</title>
                <meta property="url" content="https://ghazizadeh.co/store" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="فروشکاه قطعات خودرو" />
                <meta name="description" content="فروشگاه اینترنتی قطعات و لوازم جانبی خودرو" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <StoreIndex props={props} />
            </PublicLayout>
        </>
    )
}

export async function getServerSideProps() {
    const resBanners = await fetch(`${BASE_API}/siteinfo/slider_and_banner/`);
    const resCategories = await fetch(`${BASE_API}/store/categories/`);
    const resLatestProducts = await fetch(`${BASE_API}/store/search_products?ordering=created_date`);

    const categories = await resCategories.json()
    const banners = await resBanners.json()
    const latestProduct = await resLatestProducts.json()

    return {
        props: {
            banners,
            categories,
            latestProduct: latestProduct.results
        }
    }
}


export default index
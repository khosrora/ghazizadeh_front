import React from 'react'
import AboutUsIndex from '../../components/pages/AboutUs/AboutUsIndex'
import PublicLayout from '../../components/layout/public/index'
import { BASE_API } from '../../utils/baseApi';
import Head from 'next/head';

function index(props) {
    const aboutUs = props.data;

    return (
        <>
            <Head>
                <title>گروه خودرویی غازی زاده | درباره ما</title>
                <meta property="url" content="https://ghazizadeh.co/about_us" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="نمایش ماشین قطعات خودرو" />
                <meta name="description" content="گروه خودرویی غازی زاده" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <AboutUsIndex item={aboutUs} />
            </PublicLayout>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${BASE_API}/siteinfo/about_us/`);
    const data = await res.json()
    return {
        props: {
            data,
        }
    }
}

export default index
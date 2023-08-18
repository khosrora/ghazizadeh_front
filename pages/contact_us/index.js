import Head from 'next/head';
import React from 'react'
import PublicLayout from '../../components/layout/public/index'
import ContactUsIndex from '../../components/pages/ContactUs/ContactIndex'
import { BASE_API } from '../../utils/baseApi';

function index(props) {

    const items = props.data;

    return (
        <>
            <Head>
                <title>گروه خودرویی غازی زاده | تماس با ما</title>
                <meta property="url" content="https://ghazizadeh.co/contact_us" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="نمایش ماشین قطعات خودرو" />
                <meta name="description" content="گروه خودرویی غازی زاده" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <ContactUsIndex items={items} />
            </PublicLayout>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${BASE_API}/siteinfo/contact_us/`);
    const data = await res.json()
    return {
        props: {
            data,
        }
    }
}


export default index
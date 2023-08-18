import Head from 'next/head'
import React from 'react'
import PublicLayout from '../../components/layout/public'
import BasketIndex from '../../components/pages/BasketPage/BasketIndex'

function index() {
    return (
        <>
            <Head>
                <title>گروه خودرویی غازی زاده | سبد خرید</title>
                <meta property="url" content="https://ghazizadeh.co/basket" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="نمایش ماشین قطعات خودرو" />
                <meta name="description" content="گروه خودرویی غازی زاده" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <BasketIndex />
            </PublicLayout>
        </>
    )
}

export default index
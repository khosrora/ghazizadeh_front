import Head from 'next/head'
import React from 'react'
import LayoutDashboard from '../../../components/layout/dashboard/LayoutDashboard'
import IndexOrders from '../../../components/pages/Dashboard/Orders/IndexOrders'

function index() {
    return (
        <>
            <Head>
                <title>گروه خودرویی غازی زاده | داشبورد</title>
                <meta property="url" content="https://ghazizadeh.co/dashboard" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="نمایش ماشین قطعات خودرو" />
                <meta name="description" content="پنل کاربری" />
                <meta name="robots" content="index, follow" />
            </Head>
            <LayoutDashboard>
                <IndexOrders />
            </LayoutDashboard>
        </>
    )
}

export default index
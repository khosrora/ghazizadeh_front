import Head from 'next/head'
import React from 'react'
import PublicLayout from '../../components/layout/public/index'
import BlogsIndex from '../../components/pages/Blogs/BlogsIndex'

function index() {
    return (
        <>
            <Head>
                <title>گروه خودرویی غازی زاده | مقالات</title>
                <meta property="url" content="https://ghazizadeh.co/contact_us" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="نمایش ماشین قطعات خودرو" />
                <meta name="description" content="مقالات و بررسی ماشین ها و برندهای خودروسازی و قطعات سازی" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <BlogsIndex />
            </PublicLayout>
        </>
    )
}

export default index
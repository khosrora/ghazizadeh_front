import Head from 'next/head';
import React from 'react'
import PublicLayout from '../../../components/layout/public'
import FinallyPaymentIndex from '../../../components/pages/BasketPage/FinallyPage/FinallyPaymentIndex'
import { BASE_API } from '../../../utils/baseApi';

function index(props) {


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
                <FinallyPaymentIndex postsType={props.postsType} />
            </PublicLayout>
        </>
    )
}



export async function getServerSideProps() {
    const res = await fetch(`${BASE_API}/store/payment_method/`);

    const postsType = await res.json()

    return {
        props: {
            postsType,
        }
    }
}

export default index
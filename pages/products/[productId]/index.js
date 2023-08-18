import Head from 'next/head';
import React from 'react'
import PublicLayout from '../../../components/layout/public'
import SingleProduct from '../../../components/pages/SingleProduct'
import { BASE_API } from '../../../utils/baseApi';

function Index(props) {


    return (
        <>
            <Head>
                <title>{props.product.title}</title>
                <meta property="url" content={`https://ghazizadeh.co/products/${props.product.id}`} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="فروشکاه قطعات خودرو" />
                <meta name="description" content={`خرید ${props.product.title} از برند ${props.product.brand.title}`} />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <SingleProduct props={props} />
            </PublicLayout>
        </>
    )
}


export async function getServerSideProps({ query }) {

    const resProduct = await fetch(`${BASE_API}/store/products/${query.productId}/`);

    const product = await resProduct.json()

    return {
        props: {
            product,
        }
    }
}

export default Index
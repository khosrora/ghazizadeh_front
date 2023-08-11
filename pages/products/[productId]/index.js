import React from 'react'
import PublicLayout from '../../../components/layout/public'
import SingleProduct from '../../../components/pages/SingleProduct'
import { BASE_API } from '../../../utils/baseApi';

function index(props) {


    return (
        <PublicLayout>
            <SingleProduct props={props} />
        </PublicLayout>
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

export default index
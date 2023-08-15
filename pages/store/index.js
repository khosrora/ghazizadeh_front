import React from 'react'
import PublicLayout from '../../components/layout/public'
import StoreIndex from '../../components/pages/StorePage/StoreIndex'
import { BASE_API } from '../../utils/baseApi';

function index(props) {
    
    return (
        <PublicLayout>
            <StoreIndex props={props} />
        </PublicLayout>
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
            latestProduct : latestProduct.results
        }
    }
}


export default index
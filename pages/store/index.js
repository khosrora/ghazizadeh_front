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

    const categories = await resCategories.json()
    const banners = await resBanners.json()


    return {
        props: {
            banners , 
             categories
        }
    }
}


export default index
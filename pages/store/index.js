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
    const banners = await resBanners.json()
    return {
        props: {
            banners
        }
    }
}


export default index
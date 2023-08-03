import React from 'react'
import AboutUsIndex from '../../components/pages/AboutUs/AboutUsIndex'
import PublicLayout from '../../components/layout/public/index'
import { BASE_API } from '../../utils/baseApi';

function index(props) {
    const aboutUs = props.data;
    
    return (
        <PublicLayout>
            <AboutUsIndex item={aboutUs} />
        </PublicLayout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${BASE_API}/siteinfo/about_us/`);
    const data = await res.json()
    return {
        props: {
            data,
        }
    }
}

export default index
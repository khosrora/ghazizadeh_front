import React from 'react'
import PublicLayout from '../../components/layout/public/index'
import ContactUsIndex from '../../components/pages/ContactUs/ContactIndex'
import { BASE_API } from '../../utils/baseApi';

function index(props) {

    const items = props.data;

    return (
        <PublicLayout>
            <ContactUsIndex items={items} />
        </PublicLayout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${BASE_API}/siteinfo/contact_us/`);
    const data = await res.json()
    return {
        props: {
            data,
        }
    }
}


export default index
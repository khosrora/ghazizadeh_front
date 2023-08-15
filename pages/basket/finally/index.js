import React from 'react'
import PublicLayout from '../../../components/layout/public'
import FinallyPaymentIndex from '../../../components/pages/BasketPage/FinallyPage/FinallyPaymentIndex'
import { BASE_API } from '../../../utils/baseApi';

function index(props) {


    return (
        <PublicLayout>
            <FinallyPaymentIndex postsType={props.postsType} />
        </PublicLayout>
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
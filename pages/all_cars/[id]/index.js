import Head from 'next/head';
import React from 'react'
import PublicLayout from '../../../components/layout/public'
import SingleCar from '../../../components/pages/SingleCar'
import { BASE_API } from '../../../utils/baseApi';

function index(props) {

    return (
        <>
            <Head>
                <title>{props.car.title}</title>
                <meta property="url" content={`https://ghazizadeh.co/all_cars/${props.car.id}`} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="فروشکاه قطعات خودرو" />
                <meta name="description" content={`خرید ${props.car.title} از برند ${props.car.brand.title}`} />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <SingleCar car={props.car} />
            </PublicLayout>
        </>
    )
}

export async function getServerSideProps({ query }) {

    const resCar = await fetch(`${BASE_API}/car/cars/${query.id}/`);

    const car = await resCar.json()

    return {
        props: {
            car
        }
    }
}

export default index
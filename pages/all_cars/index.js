import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import PublicLayout from '../../components/layout/public'
import BrandsIcons from '../../components/pages/OtherPage/allCars/BrandsIcons'
import Cardscar from '../../components/pages/OtherPage/allCars/Cardscar'
import { getFirstCar } from '../../store/public/publicSlice';
import { BASE_API } from '../../utils/baseApi';
import { buildURLQuery } from '../../utils/functions';

function Index(props) {

    const nextPage = props.cars.links.next;
    const cars = props.cars.results;
    const count = props.cars.count;
    const [hasMore, setHasMore] = useState();



    const dispatch = useDispatch();
    useEffect(() => {
        setHasMore(count <= 6 ? false : true)
        dispatch(getFirstCar(cars))
    }, [cars])

    return (
        <>
            <Head>
                <title>نمایشگاه ماشین گروه خودرویی غازی زاده</title>
                <meta property="url" content="https://ghazizadeh.co/all_cars" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="نمایش ماشین قطعات خودرو" />
                <meta name="description" content="نمایش و معرفی خودروهای جدید و بروز برندهای خودروسازی" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <BrandsIcons
                    setHasMore={setHasMore}
                    banners={props.banners}
                />
                <Cardscar
                    nextPage={nextPage}
                    hasMore={hasMore}
                    count={count}
                    setHasMore={setHasMore}
                />
            </PublicLayout>
        </>
    )
}

export async function getServerSideProps({ query }) {

    const param = buildURLQuery(query)

    const res = await fetch(`${BASE_API}/brand/brands`);
    const resCar = await fetch(`${BASE_API}/car/cars/?${param}`);

    const banners = await res.json()
    const cars = await resCar.json()

    return {
        props: {
            banners,
            cars
        }
    }
}

export default Index
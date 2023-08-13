import React from 'react'
import PublicLayout from '../../../components/layout/public'
import SingleCar from '../../../components/pages/SingleCar'
import { BASE_API } from '../../../utils/baseApi';

function index(props) {

    return (
        <PublicLayout>
            <SingleCar car={props.car} />
        </PublicLayout>
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
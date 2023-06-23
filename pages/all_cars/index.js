import React from 'react'
import PublicLayout from '../../components/layout/public'
import BrandsIcons from '../../components/pages/OtherPage/allCars/BrandsIcons'
import Cardscar from '../../components/pages/OtherPage/allCars/Cardscar'

function index() {
    return (
        <PublicLayout>

            <BrandsIcons />
            <Cardscar />


        </PublicLayout>
    )
}

export default index
import React from 'react'
import SearchBar from './SearchBar'
import BannerStore from './BannerStore'
import CarAccessories from '../HomePage/CarAccessories'
import Consumables from '../HomePage/Consumables'
import SpareParts from '../HomePage/SpareParts'
import AccessoriesMe from '../HomePage/AccessoriesMe'
import NewProduct from './NewProduct'
import PopularrStore from './PopularrStore'


function StoreIndex({ props }) {



    return (
        <div>
            <SearchBar />
            <BannerStore banners={props.banners} />
            <CarAccessories />
            <NewProduct />
            <SpareParts />
            <Consumables />
            <PopularrStore />
            <AccessoriesMe />
        </div>
    )
}

export default StoreIndex
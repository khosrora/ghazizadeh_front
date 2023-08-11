import React from 'react'
import SearchBar from './SearchBar'
import BannerStore from './BannerStore'
import CarAccessories from '../HomePage/CarAccessories'
import AccessoriesMe from '../HomePage/AccessoriesMe'
import NewProduct from './NewProduct'
import PopularrStore from './PopularrStore'
import Categories from '../HomePage/Categories'


function StoreIndex({ props }) {

    return (
        <div>
            <SearchBar />
            <BannerStore banners={props.banners} />
            <CarAccessories />
            <NewProduct />
            {/* <PopularrStore /> */}
            {
                props.categories.map(category => category.is_cart ? <AccessoriesMe key={category.id} category={category}  /> : <Categories key={category.id} category={category} />)
            }
        </div>
    )
}

export default StoreIndex
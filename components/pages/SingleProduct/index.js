import React from 'react'
import DescriptionSingleProduct from './DescriptionSingleProduct'
import DetailsSingleProduct from './DetailsSingleProduct'
import GalleryImage from './GalleryImage'
import SingleProductBreadCrumb from './SingleProductBreadCrumb'
import SuggestProduct from './SuggestProduct'

function SingleProduct() {
    return (
        <>
            <div className='p-4'>
                <SingleProductBreadCrumb />
                <div className="lg:grid lg:grid-cols-4 lg:gap-x-4">
                    <div className="lg:col-span-2">
                        <GalleryImage />
                    </div>
                    <div className="lg:col-span-1">
                        <DescriptionSingleProduct />
                    </div>
                    <div className="lg:col-span-1 space-y-4 mt-4 lg:mt-0">
                        <div className="flex justify-between items-center">
                            <p>قیمت فروشنده:</p>
                            <p>30/000/000 <span>تومان</span></p>
                        </div>
                        <div className="btn bg-[#EA0028] rounded-full w-full text-white">افزودن به سبد خرید</div>
                    </div>
                </div>
                <DetailsSingleProduct />
            </div>
            <SuggestProduct />
        </>
    )
}

export default SingleProduct
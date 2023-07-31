import React from 'react'
import DescriptionSingleCar from './DescriptionSingleCar'
import DetailsSingleProduct from './DetailsSingleProduct'
import GalleryImage from './GalleryImage'
import SingleProductBreadCrumb from './SingleProductBreadCrumb'
import SuggestProduct from './SuggestProduct'

function SingleCar() {
    return (
        <>
            <div className='p-4'>
                <SingleProductBreadCrumb />
                <div className="lg:grid lg:grid-cols-4 lg:gap-x-4">
                    <div className="lg:col-span-2">
                        <GalleryImage />
                    </div>
                    <div className="lg:col-span-1">
                        <DescriptionSingleCar />
                    </div>
                    <div className="lg:col-span-1 space-y-4 mt-4 lg:mt-0">
                        <div className="">
                            <p>سال ۲۰۱۲ - ۲۰۱۵</p>
                        </div>
                        <div className="btn bg-[#EA0028] rounded-full w-full text-white">تماس با ما</div>
                        <br />
                        <p className='text-xs text-[#EA0028]'>
                            به علت نوسانات بازار قیمت محصولات نمایش داده نمی شود و برای اطلاع از قیمت ها با ما تماس بگیرید
                        </p>
                    </div>
                </div>
                <DetailsSingleProduct />
            </div>
            <SuggestProduct />
        </>
    )
}

export default SingleCar
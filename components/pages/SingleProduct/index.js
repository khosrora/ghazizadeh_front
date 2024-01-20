import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../../../store/basket/BasketSlice'
import { errorMessage } from '../../../utils/toast'
import DescriptionSingleProduct from './DescriptionSingleProduct'
import DetailsSingleProduct from './DetailsSingleProduct'
import GalleryImage from './GalleryImage'
import SingleProductBreadCrumb from './SingleProductBreadCrumb'
import SuggestProduct from './SuggestProduct'

function SingleProduct({ props }) {

    const { user } = useSelector(state => state)
    const [domain, setDomain] = useState(props.product.domain)

    const userDetails = user.userDetails;
    const { product } = props;
    const dispatch = useDispatch();

    const handleAddToBasket = (e) => {
        if (!!userDetails) {
            e.preventDefault();
            dispatch(addToBasket(product))
        } else {
            errorMessage('ابتدا وارد وب سایت شوید')
        }
    }

    return (
        <>
            <div className='p-4'>
                <SingleProductBreadCrumb title={product.title} />
                <div className="lg:grid lg:grid-cols-4 lg:gap-x-4">
                    <div className="lg:col-span-2">
                        <GalleryImage images={product.gallery} />
                    </div>
                    <div className="lg:col-span-1">
                        <DescriptionSingleProduct technicalNumber={product.technical_number} specs={product.specs} title={product.title} />
                    </div>
                    <div className="lg:col-span-1 space-y-4 mt-4 lg:mt-0">
                        <div className="flex justify-between items-center">
                            <p>قیمت :</p>
                            <p>{new Intl.NumberFormat().format(product.price)} <span>تومان</span></p>
                        </div>
                        <div className="btn bg-[#EA0028] rounded-full w-full text-white" onClick={(e) => handleAddToBasket(e)}>افزودن به سبد خرید</div>
                    </div>
                </div>
                <DetailsSingleProduct product={product} />
            </div>
            {
                product.relational_products.length === 0 ? null :
                    <SuggestProduct domain={domain} relationalProducts={product.relational_products} />
            }
        </>
    )
}

export default SingleProduct
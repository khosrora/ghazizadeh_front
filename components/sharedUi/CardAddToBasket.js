import Link from 'next/link'
import React from 'react'
import BtnAddToBasket from './BtnAddToBasket'

function CardAddToBasket({ product }) {

    return (
        <Link href={`/products/${product.id}`} className="bg-[#FFFFFF] rounded-xl">
            <figure className="p-2 h-[140px] md:h-[160px] lg:h-[220px]">
                <img
                    src={product.gallery[0].image}
                    alt={product.title}
                    width="200"
                    height="200"
                    className="rounded-xl object-cover object-center h-full w-full " />
            </figure>
            <div className="card-body text-right w-full ">
                <h2 className="card-title font-bold text-[14px]">{product.title}</h2>
                <p className="card-title font-bold text-[12px]">فرمون خودرو مدل TRETTF2</p>
                <div className="card-actions flex justify-between items-center">
                    <span className='text-[12px]'>{new Intl.NumberFormat().format(product.price)} <span className='text-[8px]'>تومان</span></span>
                    <BtnAddToBasket />
                </div>
            </div>
        </Link>
    )
}

export default CardAddToBasket
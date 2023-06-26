import React from 'react'
import BtnAddToBasket from './BtnAddToBasket'

function CardAddToBasket() {
    return (
        <div className="bg-[#FFFFFF] rounded-xl">
            <figure className="p-2 h-[140px] md:h-[160px] lg:h-[220px]">
                <img
                    src="https://www.finds.ir/photos/2022020530082437.jpg"
                    alt="Shoes"
                    width="200"
                    height="200"
                    className="rounded-xl object-contain w-full" />
            </figure>
            <div className="card-body text-right w-full ">
                <h2 className="card-title font-bold text-[14px]">لیفان</h2>
                <p className="card-title font-bold text-[12px]">فرمون خودرو مدل TRETTF2</p>
                <div className="card-actions flex justify-between items-center">
                    <span className='text-[12px]'>200/000 <span className='text-[8px]'>تومان</span></span>
                    <BtnAddToBasket />
                </div>
            </div>
        </div>
    )
}

export default CardAddToBasket
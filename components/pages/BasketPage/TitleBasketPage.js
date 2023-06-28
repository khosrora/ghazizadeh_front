import React from 'react'

function TitleBasketPage() {
    return (
        <div className="flex justify-between items-center lg:justify-start lg:gap-x-2">
            <div className="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08002" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="">
                <p className='font-bold'>سبد خرید</p>
            </div>
            <div className=""></div>
        </div>
    )
}

export default TitleBasketPage
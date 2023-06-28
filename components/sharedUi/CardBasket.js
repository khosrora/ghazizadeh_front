import React from 'react'

function CardBasket() {
    return (
        <div className="bg-[#FFFFFF] rounded-xl p-2">
            <figure className='h-[150px] w-full'>
                <img
                    src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_17/3598288/31vtpbqa3pl-sl500-640f77363e78e.jpg"
                    alt=""
                    className='w-full h-full object-contain rounded-xl'
                />
            </figure>
            <div className="space-y-4 mt-2 p-2">
                <p className='text-[14px] font-bold'>لیفان</p>
                <p className='text-[12px]' Ï>فرمون خودرو مدل TRETTF2</p>
                <div className="flex justify-start items-center gap-x-4">
                    <div className="bg-[#EA0028] p-1 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 15V5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p>0</p>
                    <div className="border border-[#EA0028] p-1.5 rounded-full">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66699 10L6.66699 8" stroke="#EA0028" stroke-linecap="round" />
                            <path d="M9.33301 10L9.33301 8" stroke="#EA0028" stroke-linecap="round" />
                            <path d="M2 4.66669H14V4.66669C12.8954 4.66669 12 5.56212 12 6.66669V9.33335C12 11.219 12 12.1618 11.4142 12.7476C10.8284 13.3334 9.88562 13.3334 8 13.3334V13.3334C6.11438 13.3334 5.17157 13.3334 4.58579 12.7476C4 12.1618 4 11.219 4 9.33335V6.66669C4 5.56212 3.10457 4.66669 2 4.66669V4.66669Z" stroke="#EA0028" stroke-linecap="round" />
                            <path d="M6.71177 2.24706C6.78774 2.17618 6.95513 2.11355 7.18799 2.06888C7.42085 2.02421 7.70616 2 7.99967 2C8.29319 2 8.5785 2.02421 8.81136 2.06888C9.04422 2.11355 9.21161 2.17618 9.28758 2.24706" stroke="#EA0028" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <p className='text-[10px] font-extrabold'>200/000 <span className='font-bold'>تومان</span></p>
            </div>
        </div>
    )
}

export default CardBasket
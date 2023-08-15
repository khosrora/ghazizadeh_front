import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, minusItemFromCart, plusItemFromCart } from '../../store/basket/BasketSlice';

function CardBasket({ product }) {

    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteItemFromCart(id))
    }

    const handlePlus = id => {
        dispatch(plusItemFromCart(id))
    }

    const handleMinus = id => {
        dispatch(minusItemFromCart(id))
    }

    return (
        <div className="bg-[#FFFFFF] rounded-xl p-2">
            <figure className='h-[180px] '>
                <img className='rounded-xl h-full w-full object-cover' src={product.image} alt={product.title} />
            </figure>
            <div className="space-y-4 mt-2 p-2">
                <p className='text-[14px] font-bold'>{product.title}</p>
                {/* <p className='text-[12px]'>فرمون خودرو مدل TRETTF2</p> */}
                <div className="flex justify-start items-center gap-x-4">
                    <div className="bg-[#EA0028] p-1 rounded-full cursor-pointer" onClick={() => handlePlus(product.id)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H15" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M10 15V5" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p>{product.count}</p>
                    {
                        product.count === 1 ?
                            <div className="border border-[#EA0028] p-1.5 rounded-full cursor-pointer" onClick={() => handleDelete(product.id)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66699 10L6.66699 8" stroke="#EA0028" strokeLinecap="round" />
                                    <path d="M9.33301 10L9.33301 8" stroke="#EA0028" strokeLinecap="round" />
                                    <path d="M2 4.66669H14V4.66669C12.8954 4.66669 12 5.56212 12 6.66669V9.33335C12 11.219 12 12.1618 11.4142 12.7476C10.8284 13.3334 9.88562 13.3334 8 13.3334V13.3334C6.11438 13.3334 5.17157 13.3334 4.58579 12.7476C4 12.1618 4 11.219 4 9.33335V6.66669C4 5.56212 3.10457 4.66669 2 4.66669V4.66669Z" stroke="#EA0028" strokeLinecap="round" />
                                    <path d="M6.71177 2.24706C6.78774 2.17618 6.95513 2.11355 7.18799 2.06888C7.42085 2.02421 7.70616 2 7.99967 2C8.29319 2 8.5785 2.02421 8.81136 2.06888C9.04422 2.11355 9.21161 2.17618 9.28758 2.24706" stroke="#EA0028" strokeLinecap="round" />
                                </svg>
                            </div>
                            :
                            <div className="border border-[#EA0028] p-2 py-3 rounded-full cursor-pointer" onClick={() => handleMinus(product.id)}>
                                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.00006H11" stroke="#EA0028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                    }
                </div>
                <p className='text-[10px] font-extrabold'>{new Intl.NumberFormat().format(product.price * product.count)} <span className='font-bold'>تومان</span></p>
            </div>
        </div>
    )
}

export default CardBasket
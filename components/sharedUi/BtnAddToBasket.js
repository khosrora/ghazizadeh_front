import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../store/basket/BasketSlice';
import { errorMessage } from '../../utils/toast';

function BtnAddToBasket({ product }) {

    const dispatch = useDispatch();
    const { userDetails } = useSelector(state => state.user);

    const handleAddToBasket = (e) => {
        e.preventDefault();
        if (userDetails === null) return errorMessage('ابتدا وارد وب سایت شوید')
        dispatch(addToBasket(product))
    }

    return (
        <button className="bg-[#EA0028] p-1 rounded-full z-20" onClick={(e) => handleAddToBasket(e)}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#EA0028" />
                <path d="M13.5 13.67V12.7C13.5 10.45 15.31 8.24 17.56 8.03C20.24 7.77 22.5 9.88 22.5 12.51V13.89" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.9998 28H20.9998C25.0198 28 25.7398 26.39 25.9498 24.43L26.6998 18.43C26.9698 15.99 26.2698 14 21.9998 14H13.9998C9.72983 14 9.02983 15.99 9.29983 18.43L10.0498 24.43C10.2598 26.39 10.9798 28 14.9998 28Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.4955 18H21.5045" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.4945 18H14.5035" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}

export default BtnAddToBasket
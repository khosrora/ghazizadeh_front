import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BasketName } from '../../store/basket/BasketSlice'

function SuccessPayment({ refId }) {

    useEffect(() => {
        Cookies.remove(BasketName)
    }, [])

    return (
        <div className="flex flex-col gap-y-8 items-center">
            <img
                src='/images/ok.png'
                width='300'
                height='300'
            />
            <p className='text-[#498553]'>پرداخت شما با موفقیت انجام شد</p>
            <p>کد رهگیری :  <span> {refId} </span></p>
            <Link href='/dashboard/orders'>
                <p className='btn rounded-full bg-white text-[#EA0028]'> مشاهده سفارشات </p>
            </Link>
        </div>
    )
}

export default SuccessPayment
import Link from 'next/link'
import React from 'react'

function ErrorPayment() {
    return (
        <div className="flex flex-col gap-y-8 items-center">
            <img
                src='/images/nok.png'
                width='300'
                height='300'
            />
            <p className='text-[#FB563D]'>پرداخت شما ناموفق بود</p>
            <Link href='/'>
                <p className='btn rounded-full bg-white text-[#EA0028]'> بازگشت به خانه </p>
            </Link>
        </div>
    )
}

export default ErrorPayment
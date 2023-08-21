import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { errorMessage } from '../../../utils/toast';
import { checkDiscountCode, getBasketState } from './../../../store/basket/BasketSlice'

function DetailBasket() {

    const dispatch = useDispatch();

    const [discount, setDiscount] = useState()
    const [total, setTotal] = useState()

    const { basket , percentage } = useSelector(getBasketState);

    const handleDiscount = code => {
        if (!code) return errorMessage('ابتدا کد تخفیف را وارد کنید');
        dispatch(checkDiscountCode(code))
    }

    useEffect(() => {
        const getTotal = () => {
            const total = basket.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            if (percentage !== null) {
                setTotal(total - (total * percentage) / 100);
            } else {
                setTotal(total);
            }
        }
        getTotal()
    }, [basket , percentage])

    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <p className='text-[12px]'>جمع کل هزینه</p>
                <p className='text-[14px] font-bold'> {new Intl.NumberFormat().format(total)} تومان </p>
            </div>
            <hr />
            <div className="flex flex-col items-start">
                <p className=''>کد تخفیف</p>
                <div className="flex justify-between items-start w-full mt-2 gap-x-4">
                    <div className="bg-[#FFFFFF] rounded-full overflow-hidden relative w-3/4">
                        <input onChange={(e) => setDiscount(e.target.value)} type="text" className='text-xs p-4 w-full focus:outline-none' placeholder='کد تخفیف را وارد کنید' name="" id="" />
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleDiscount(discount)
                    }} className="btn w-1/3 text-xs border border-[#EB430C] bg-[#FFFFFF] rounded-full text-center">
                        <p className='text-[#EB430C]'>اعمال</p>
                    </button>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <p className='text-[12px]'>مبلغ قابل پرداخت</p>
                <p className='text-[14px] font-bold'> {new Intl.NumberFormat().format(total)} تومان </p>
            </div>
            <Link href='/basket/finally' className='btn w-full bg-[#EA0028] text-white rounded-full'>
                <p>ادامه خرید</p>
            </Link>
        </div>
    )
}

export default DetailBasket
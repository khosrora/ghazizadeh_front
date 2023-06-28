import React from 'react'

function DetailBasket() {
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <p className='text-[12px]'>جمع کل هزینه</p>
                <p className='text-[14px] font-bold'> 320,000,000 تومان </p>
            </div>
            <hr />
            <div className="flex flex-col items-start">
                <p className=''>کد تخفیف</p>
                <div className="flex justify-between items-start w-full mt-2 gap-x-4">
                    <div className="bg-[#FFFFFF] rounded-full overflow-hidden relative w-3/4">
                        <input type="text" className='text-xs p-4 w-full focus:outline-none' placeholder='کد تخفیف را وارد کنید' name="" id="" />
                    </div>
                    <button className="btn w-1/3 text-xs border border-[#EB430C] bg-[#FFFFFF] rounded-full text-center">
                        <p className='text-[#EB430C]'>اعمال</p>
                    </button>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <p className='text-[12px]'>سود شما</p>
                <p className='text-[14px] font-bold'> 320,000,000 تومان </p>
            </div>
            <button className='btn w-full bg-[#EA0028] text-white rounded-full'>ادامه خرید</button>
        </div>
    )
}

export default DetailBasket
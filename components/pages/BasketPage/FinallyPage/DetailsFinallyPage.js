import React from 'react'

function DetailsFinallyPage() {
    return (
        <div className='flex flex-col gap-y-6 bg-[#FFFFFF] p-4 rounded-xl'>
            <div className="flex justify-between items-center">
                <p className='text-[12px] font-bold text-[#666666]'> جمع کل هزینه : </p>
                <p className='font-bold'>240/000 <span className='text-[8px]'>تومان</span></p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <p className='text-[12px] font-bold text-[#199EA7]'> هزینه ارسال : </p>
                <p className='font-bold text-[#199EA7]'>240/000 <span className='text-[8px]'>تومان</span></p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <p className='text-[12px] font-bold text-[#EA0028]'> سود شما از خرید : </p>
                <p className='font-bold text-[#EA0028]'>240/000 <span className='text-[8px]'>تومان</span></p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <p className='text-[12px] font-bold text-[#666666]'> هزینه نهایی : </p>
                <p className='font-bold'>240/000 <span className='text-[8px]'>تومان</span></p>
            </div>
            <hr />
            <button className='btn w-full bg-[#EA0028] text-white rounded-full'>نهایی کردن سفارش</button>
        </div>
    )
}

export default DetailsFinallyPage
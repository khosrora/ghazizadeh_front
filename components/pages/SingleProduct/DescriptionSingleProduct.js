import React from 'react'

function DescriptionSingleProduct() {
    return (
        <div className='flex flex-col gap-y-4 mt-8 lg:mt-0'>
            <p className='text-[16px] font-bold'>لیفان</p>
            <p className='text-[#666666] text-[16px]'> برند محصول: <span className='font-bold'> تورادور </span> </p>
            <p className='text-[#666666] text-[16px]'> تعداد سوراخ: <span className='font-bold'> 9 </span> </p>
            <p className='text-[#666666] text-[16px]'> نوع دیسک ترمز:  <span className='font-bold'> دارای تهویه داخلی </span> </p>
            <p className='text-[#666666] text-[16px]'> <span className='font-bold'> دیسک ترمز RIDEX 82B0169</span> </p>
        </div>
    )
}

export default DescriptionSingleProduct
import React from 'react'

function DescriptionSingleProduct({ technicalNumber, specs, title }) {

    return (
        <div className='flex flex-col gap-y-4 mt-8 lg:mt-0'>
            {
                technicalNumber &&
                <p className='text-[16px] font-bold'>شماره فنی :  {technicalNumber}</p>
            }
            <p className='text-[16px] font-bold'>{title}</p>
            {
                specs.slice(1, 5).map(i =>
                    <p key={i.id} className='text-[#666666] text-[16px]'> {i.key}: <span className='font-bold'> {i.value} </span> </p>
                )
            }
        </div>
    )
}

export default DescriptionSingleProduct
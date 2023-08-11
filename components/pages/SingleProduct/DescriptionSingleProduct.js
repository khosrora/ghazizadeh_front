import React from 'react'

function DescriptionSingleProduct({ specs , title }) {
    return (
        <div className='flex flex-col gap-y-4 mt-8 lg:mt-0'>
            <p className='text-[16px] font-bold'>{title}</p>
            {
                specs.map(i =>
                    <p key={i.id} className='text-[#666666] text-[16px]'> {i.key}: <span className='font-bold'> {i.value} </span> </p>
                )
            }
        </div>
    )
}

export default DescriptionSingleProduct
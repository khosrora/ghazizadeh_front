import React from 'react'

function DescriptionSingleCar({ car }) {
    return (
        <div className='flex flex-col gap-y-4 mt-8 lg:mt-0'>
            <p className='text-[16px] font-bold'>{car.title}</p>
            {
                car.specs.slice(1, 5).map(item =>
                    <p key={item.id} className='text-[#666666] text-[16px]'> {item.key}: <span className='font-bold'> {item.value} </span> </p>
                )
            }
        </div>
    )
}

export default DescriptionSingleCar
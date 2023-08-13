import React from 'react'

function DetailsSingleProduct({ car }) {

    return (
        <div className='mt-8'>
            <div className="flex justify-between items-center lg:justify-start lg:gap-x-8">
                <p className='font-bold'> معرفی </p>
                <p className='font-bold'> مشخصات </p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col items-start gap-y-8">
                <div className="flex flex-col items-start gap-y-4">
                    <div className='font-bold relative'>
                        معرفی محصول
                        <div className="bg-red-600 h-[2px] w-full"></div>
                    </div>
                    <div className="" dangerouslySetInnerHTML={{ __html: car.desc }}></div>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                    <div className='font-bold relative'>
                        مشخصات
                        <div className="bg-red-600 h-[2px] w-full"></div>
                    </div>

                    {
                        car.specs.map(item =>
                            <p key={item.id} className='text-[#666666] text-[16px]'> {item.key}: <span className='font-bold'> {item.value} </span> </p>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default DetailsSingleProduct
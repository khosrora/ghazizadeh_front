import Image from 'next/image'
import React from 'react'

function AboutUsIndex({ item }) {

    console.log(item);

    return (
        <div className='p-4'>
            <div className="w-full text-center">
                <p className='font-bold text-[24px]'> گروه خودرویی غازی زاده </p>
                <div className="grid grid-cols-1 mt-4 gap-6 lg:grid-cols-2">
                    <div className="col-span-1 flex justify-center items-center">
                        <Image
                            src="/images/aboutus.png"
                            width='400'
                            height='400'
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <Image
                            src="/images/aboutus2.png"
                            width='400'
                            height='400'
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <p className='font-bold text-[21px]'>{item.title}</p>
                        <div className="text-right" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsIndex
import React, { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getComments } from '../../../store/public/publicSlice';
import CommentModal from './CommentModal'
import CommentsProduct from './CommentsProduct'

function DetailsSingleProduct({ product }) {

    return (
        <div className='mt-8'>
            <div className="flex justify-between items-center lg:justify-start lg:gap-x-8">
                <p className='font-bold'> معرفی </p>
                <p className='font-bold'> مشخصات </p>
                <p className='font-bold'> نظرات </p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col items-start gap-y-8">
                <div className="flex flex-col items-start gap-y-4">
                    <div className='font-bold relative'>
                        معرفی محصول
                        <div className="bg-red-600 h-[2px] w-full"></div>
                    </div>
                    <div className="" dangerouslySetInnerHTML={{ __html: product.desc }}></div>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                    <div className='font-bold relative'>
                        مشخصات
                        <div className="bg-red-600 h-[2px] w-full"></div>
                    </div>
                    {
                        product.specs.map(i =>
                            <p key={i.id} className='text-[#666666] text-[16px]'> {i.key}: <span className='font-bold'> {i.value} </span> </p>
                        )
                    }
                </div>
                <div className="flex flex-col items-start gap-y-4 w-full mb-8">
                    <div className='font-bold relative'>
                        نظرات کاربران
                        <div className="bg-red-600 h-[2px] w-full"></div>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-5">
                <div className="lg:col-span-1">
                    <CommentModal productId={product.id} />
                </div>
                <div className="mt-4 lg:col-span-4 lg:mt-0">
                    <Suspense>
                        <CommentsProduct comments={product.comments} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default DetailsSingleProduct
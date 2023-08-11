import React from 'react'
import CommentModal from './CommentModal'
import CommentsProduct from './CommentsProduct'

function DetailsSingleProduct({ product }) {

    console.log(product);

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
                    <p className='text-[14px] text-[#444444] leading-8'>
                        دیسک ترمز اسپرت هیدیکا دارای پوشش سطحی (کوتینگ-COATING) می باشد. این پوشش عامل ایجاد ﻣﻘﺎوﻣـﺖ ﺑﺴـﯿﺎر ﺑﺎﻻ در ﺑﺮاﺑﺮ ﺧﻮردﮔﯽ ، ﺣﺮارت، در عین حال حفظ خواص مکانیکی دیسک می باشد. قابلیت خنک کاری با بهره گیری از طراحی چیدمان سوراخ های روی سطح دیسک به صورت موثری افزایش یافته، همچنین در تولید این محصول از مواد اولیه مطابق با بهترین و با کیفیت ترین مواد اولیه در سطح استاندارد استفاده شده است
                    </p>
                </div>
                <div className="flex flex-col items-start gap-y-4">
                    <div className='font-bold relative'>
                        مشخصات
                        <div className="bg-red-600 h-[2px] w-full"></div>
                    </div>
                    <p className='text-[14px] text-[#444444] leading-8'>
                        دیسک ترمز اسپرت هیدیکا دارای پوشش سطحی (کوتینگ-COATING) می باشد. این پوشش عامل ایجاد ﻣﻘﺎوﻣـﺖ ﺑﺴـﯿﺎر ﺑﺎﻻ در ﺑﺮاﺑﺮ ﺧﻮردﮔﯽ ، ﺣﺮارت، در عین حال حفظ خواص مکانیکی دیسک می باشد. قابلیت خنک کاری با بهره گیری از طراحی چیدمان سوراخ های روی سطح دیسک به صورت موثری افزایش یافته، همچنین در تولید این محصول از مواد اولیه مطابق با بهترین و با کیفیت ترین مواد اولیه در سطح استاندارد استفاده شده است
                    </p>
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
                <div className="lg:col-span-4">
                    <CommentsProduct comments={product.comments} />
                </div>
            </div>
        </div>
    )
}

export default DetailsSingleProduct
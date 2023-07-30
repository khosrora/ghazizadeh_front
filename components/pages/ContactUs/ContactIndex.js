import React from 'react'

function ContactUsIndex() {
    return (
        <div className='p-4'>
            <div className="w-full text-center">
                <p className='font-bold text-[24px]'> ارتباط با ما </p>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:gap-x-2">
                <div className="flex flex-col gap-y-4 mt-8 lg:w-1/2">
                    <p className='font-bold text-[16px]'>نمایندگی های فروش و خدمات پس از فروش زاهدان</p>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-[14px] font-bold">نام و نام خانوادگی</span>
                        </label>
                        <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-md" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px] font-bold">ایمیل</span>
                        </label>
                        <input type="text" placeholder="ایمیل خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-md" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px] font-bold">پیام</span>
                        </label>
                        <textarea type="text" placeholder="پیام خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-md"> </textarea>
                    </div>

                    <button className='btn bg-[#EA0028] w-1/2 rounded-full text-white'>ارسال پیام</button>

                </div>

                <div className="flex flex-col justify-start items-start mt-4 lg:w-1/2">
                    <div className="flex flex-col justify-start items-start mt-4 ">
                        <p className='font-bold text-[16px]'>نمایندگی های فروش و خدمات پس از فروش زاهدان</p>
                        <div className="bg-red-500 w-1/4 h-[4px] mt-1"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <ul className='col-span-1 mt-2 flex flex-col gap-y-4 w-full'>
                                <p className='font-bold'>تلفن دفتر فروش</p>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                            </ul>
                            <ul className='col-span-1 mt-2 flex flex-col gap-y-4 w-full'>
                                <p className='font-bold'>خدمات پس از فروش</p>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                            </ul>
                            <ul className='col-span-1 mt-2 flex flex-col gap-y-4 w-full'>
                                <p className='font-bold'>تلفن دفتر قطعات</p>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className='font-bold'>آدرس</p>
                            <p>میدان ۱۵ خرداد (فلکه شرکت نفت)</p>
                        </div>
                    </div>



                    <div className="flex flex-col justify-start items-start mt-4 ">
                        <p className='font-bold text-[16px]'>نمایندگی های فروش و خدمات پس از فروش زاهدان</p>
                        <div className="bg-red-500 w-1/4 h-[4px] mt-1"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <ul className='col-span-1 mt-2 flex flex-col gap-y-4 w-full'>
                                <p className='font-bold'>تلفن دفتر فروش</p>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                            </ul>
                            <ul className='col-span-1 mt-2 flex flex-col gap-y-4 w-full'>
                                <p className='font-bold'>خدمات پس از فروش</p>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                            </ul>
                            <ul className='col-span-1 mt-2 flex flex-col gap-y-4 w-full'>
                                <p className='font-bold'>تلفن دفتر قطعات</p>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                                <li>۰۵۴-۳۳۲۱۳۵۲۷</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className='font-bold'>آدرس</p>
                            <p>میدان ۱۵ خرداد (فلکه شرکت نفت)</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ContactUsIndex
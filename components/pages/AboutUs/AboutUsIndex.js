import Image from 'next/image'
import React from 'react'

function AboutUsIndex() {
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
                        <p className='font-bold text-[21px]'>زاهدان</p>
                        <p className='font-bold text-right'>۱- مجموعه میدان ۱۵ خرداد (فلکه شرکت نفت)</p>
                        <p className='text-right'>
                            این مجموعه در سال ۱۳۵۴ توسط شادروان محمود غازی زاده در زمینی به مساحت ۷۰۰مترمربع جهت اخذ نمایندگی ایرتویا (تویوتا) احداث گردید و سپس با دیدی وسیع
                            با توجه به تجربه خودرویی و آگاه به مسائل فنی و بازار کار توسعه در دستور کار قرار گرفت که اکنون با مساحتی حدود ۴۰۰۰ متر مربع و اخذ نمایندگی های دیگر از جمله کرمان موتور
                            از سال ۱۳۷۱ و نگین خودرو و مدیا موتورز از سال ۱۳۹۱ گسترش یافته است.
                        </p>
                        <p className='font-bold text-right'>2- مجموعه میدان راه و ترابری (شرکت تعاونی
                            خدمات فنی خودرو ۱۲۹۱ زاهدان)</p>
                        <p className='text-right'>
                            این مجموعه در سال ۱۳۵۴ توسط شادروان محمود غازی زاده در زمینی به مساحت ۷۰۰مترمربع جهت اخذ نمایندگی ایرتویا (تویوتا) احداث گردید و سپس با دیدی وسیع
                            با توجه به تجربه خودرویی و آگاه به مسائل فنی و بازار کار توسعه در دستور کار قرار گرفت که اکنون با مساحتی حدود ۴۰۰۰ متر مربع و اخذ نمایندگی های دیگر از جمله کرمان موتور
                            از سال ۱۳۷۱ و نگین خودرو و مدیا موتورز از سال ۱۳۹۱ گسترش یافته است.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <p className='font-bold text-[21px]'>بیرجند</p>
                        <p className='font-bold text-right'>2- مجموعه میدان راه و ترابری (شرکت تعاونی
                            خدمات فنی خودرو ۱۲۹۱ زاهدان)</p>
                        <p className='text-right'>
                            این مجموعه در سال ۱۳۵۴ توسط شادروان محمود غازی زاده در زمینی به مساحت ۷۰۰مترمربع جهت اخذ نمایندگی ایرتویا (تویوتا) احداث گردید و سپس با دیدی وسیع
                            با توجه به تجربه خودرویی و آگاه به مسائل فنی و بازار کار توسعه در دستور کار قرار گرفت که اکنون با مساحتی حدود ۴۰۰۰ متر مربع و اخذ نمایندگی های دیگر از جمله کرمان موتور
                            از سال ۱۳۷۱ و نگین خودرو و مدیا موتورز از سال ۱۳۹۱ گسترش یافته است.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsIndex
import Image from 'next/image'
import React from 'react'
import SingleBlogBreadCrumb from './SingleBlogBreadCrumb'

function BlogIndex() {
    return (
        <div className='p-4'>
            <div className="">
                <div className="flex gap-x-4">
                    <div className="hidden lg:flex lg:flex-col lg:w-full">
                        <div className="border rounded-xl p-4 flex flex-col gap-y-4">
                            <p>جدید ترین مقالات</p>
                            <hr />
                            <p> لورم ایپسوم متن ساختگی با ... </p>
                            <hr />
                            <p> لورم ایپسوم متن ساختگی با ... </p>
                            <hr />
                            <p> لورم ایپسوم متن ساختگی با ... </p>
                        </div>
                    </div>
                    <div className="">
                        <SingleBlogBreadCrumb />
                        <h1>موتور حدید تویوتا</h1>
                        <img
                            alt='test'
                            src="https://cdn.nody.ir/files/2021/09/12/nody-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%B9%DA%A9%D8%B3-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-1631419522.jpg"
                            className='rounded-md mt-4'
                        />
                        <div className="mt-4">
                            <h1> معرفی </h1>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                        <div className="hidden lg:flex lg:flex-col border rounded-xl p-4 mt-4">
                            <p>بر چسب ها</p>
                            <br />
                            <div className="flex flex-wrap gap-4">
                                <div className="badge p-4 rounded-sm">موتور جدید تویوتا</div>
                                <div className="badge p-4 rounded-sm">تویوتا موتور</div>
                                <div className="badge p-4 rounded-sm">تویوتا</div>
                                <div className="badge p-4 rounded-sm">موتور جدید تویوتا</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <div className="border rounded-xl p-4 mt-4">
                    <p>بر چسب ها</p>
                    <br />
                    <div className="flex flex-wrap gap-4">
                        <div className="badge p-4 rounded-sm">موتور جدید تویوتا</div>
                        <div className="badge p-4 rounded-sm">تویوتا موتور</div>
                        <div className="badge p-4 rounded-sm">تویوتا</div>
                        <div className="badge p-4 rounded-sm">موتور جدید تویوتا</div>
                    </div>
                </div>

                <div className="border rounded-xl p-4 mt-4 flex flex-col gap-y-4">
                    <p>جدید ترین مقالات</p>
                    <hr />
                    <p> لورم ایپسوم متن ساختگی با ... </p>
                    <hr />
                    <p> لورم ایپسوم متن ساختگی با ... </p>
                    <hr />
                    <p> لورم ایپسوم متن ساختگی با ... </p>
                </div>
            </div>
        </div>
    )
}

export default BlogIndex
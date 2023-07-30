import Link from 'next/link'
import React from 'react'

function BlogsIndex() {
    return (
        <>
            <div className="">
                <p> مقالات </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i =>
                        <div className="bg-[#F8F9FA] rounded-xl">
                            <figure className="px-4 pt-4">
                                <img src="https://azernews.az/media/2019/07/15/peugeot-301-facelift-3.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body text-right w-full ">
                                <h2 className="card-title font-bold text-[16px]">جدیدترین ماشین تویوتا</h2>
                                <Link href="/blogs/1">
                                    <div className="card-actions">
                                        <span className="btn bg-[#FFFFFF] w-full text-[#EA0028] rounded-full text-[12px]">مشاهده محصولات</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default BlogsIndex
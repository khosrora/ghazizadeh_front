import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, getNextPageBlog } from '../../../store/blogs/BlogsSlice';

function BlogsIndex() {

    const dispatch = useDispatch();
    const { loadBlogs, blogs, next, loadNext } = useSelector(state => state.blogs)

    useEffect(() => {
        dispatch(getBlogs());
    }, [])


    function LoadBlogs() {
        return (
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                {
                    [1, 2, 3, 4, 5, 6].map((i, index) =>
                        <div key={index} class="mx-auto bg-white shadow-lg w-full rounded-2xl">
                            <div class="h-32 p-3 overflow-hidden bg-gray-200 animate-pulse">
                            </div>
                            <div class="p-3">
                                <div class="grid grid-cols-3 gap-4 mt-2">
                                    <div class="h-8 bg-gray-200 rounded animate-pulse">
                                    </div>
                                    <div class="h-8 bg-gray-200 rounded animate-pulse">
                                    </div>
                                    <div class="h-8 bg-gray-200 rounded animate-pulse">
                                    </div>
                                    <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                                    </div>
                                    <div class="h-8 bg-gray-200 rounded  animate-pulse">
                                    </div>
                                    <div class="...">
                                    </div>
                                    <div class="col-span-2 ...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    const handleNextPage = () => {
        dispatch(getNextPageBlog(next))
    }

    return (
        <div className='p-4 lg:p-0'>
            <div className="">
                <p> مقالات </p>
            </div>
            {
                loadBlogs ? <LoadBlogs /> :
                    blogs.length === 0 ?
                        <div className="alert shadow-md mb-80 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>هیج مقاله ای برای نمایش وجود ندارد</span>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {
                                blogs.map((i, index) =>
                                    <div key={index} className="bg-[#F8F9FA] rounded-xl">
                                        <figure className="px-4 pt-4">
                                            <img src={i.image.image} title={i.image.title} className="rounded-xl h-40 w-full object-cover" />
                                        </figure>
                                        <div className="card-body text-right w-full ">
                                            <h2 className="card-title font-bold text-[16px] mb-2">
                                                {
                                                    i.title.length > 30 ?
                                                        `${i.title.substring(0, 30)}...` : i.title
                                                }
                                            </h2>
                                            <Link alt={i.title} href={`/blogs/${i.slug}`}>
                                                <div className="card-actions">
                                                    <span className="btn bg-[#FFFFFF] w-full text-[#EA0028] rounded-full text-[12px]">مشاهده محصولات</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
            }
            {
                !!next &&
                <div className="w-full flex justify-center items-center mt-16">
                    <button disabled={loadNext ? true : false} className='btn rounded-full px-16' onClick={() => handleNextPage()}>
                        {loadNext ? <span className="loading loading-spinner loading-xs"></span> : 'موارد بیشتر '}
                    </button>
                </div>
            }
        </div>
    )
}

export default BlogsIndex
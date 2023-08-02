import Link from 'next/link';
import React from 'react'
import SingleBlogBreadCrumb from './SingleBlogBreadCrumb'

function BlogIndex({ blog, latestBlog }) {


    return (
        <div className='p-4'>
            <div className="">
                <div className="flex gap-x-4">
                    {
                        latestBlog.length === 0 ? null :
                            <div className="hidden lg:flex lg:flex-col lg:w-full">
                                <div className="border rounded-xl p-4 flex flex-col gap-y-4">
                                    <p>جدید ترین مقالات</p>
                                    <hr />
                                    {
                                        latestBlog.map((i, index) =>
                                            <>
                                                <Link key={index} alt={i.title} href={`/blogs/${i.slug}`}>
                                                    <p className='text-xs text-blue-400'>
                                                        {
                                                            i.title.length > 30 ?
                                                                `${i.title.substring(0, 30)}...` : i.title
                                                        }
                                                    </p>
                                                </Link>
                                                <hr />
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                    }
                    <div className="">
                        <SingleBlogBreadCrumb title={blog.title} />
                        <h1>{blog.title}</h1>
                        <img
                            title={blog.title}
                            src={blog.image.image}
                            className='rounded-md mt-4 w-full object-cover'
                        />
                        <div className="mt-4" dangerouslySetInnerHTML={{ __html: blog.desc }}>
                        </div>
                        {
                            blog.tags.length === 0 ? null :
                                <div className="hidden lg:flex lg:flex-col border rounded-xl p-4 mt-4">
                                    <p>بر چسب ها</p>
                                    <br />
                                    <div className="flex flex-wrap gap-4">
                                        {
                                            blog.tags.map((i, index) =>
                                                <div key={index} className="badge p-4 rounded-sm">{i}</div>
                                            )
                                        }

                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                {
                    blog.tags.length === 0 ? null :
                        <div className="border rounded-xl p-4 mt-4">
                            <p>بر چسب ها</p>
                            <br />
                            <div className="flex flex-wrap gap-4">
                                {
                                    blog.tags.map((i, index) =>
                                        <div key={index} className="badge p-4 rounded-sm">{i}</div>
                                    )
                                }
                            </div>
                        </div>
                }
                {
                    latestBlog.length === 0 ? null :
                        <div className="border rounded-xl p-4 mt-4 flex flex-col gap-y-4">
                            {
                                latestBlog.map((i, index) =>
                                    <>
                                        <Link key={index} alt={i.title} href={`/blogs/${i.slug}`}>
                                            <p className='text-xs text-blue-400'>
                                                {
                                                    i.title.length > 30 ?
                                                        `${i.title.substring(0, 30)}...` : i.title
                                                }
                                            </p>
                                        </Link>
                                        <hr />
                                    </>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default BlogIndex
import Link from 'next/link'
import React from 'react'

function SingleBlogBreadCrumb({ title }) {
    return (
        <div className="text-sm breadcrumbs mb-4">
            <ul>
                <li><Link href="/">خانه</Link></li>
                <li><Link href="/blogs">مقالات</Link></li>
                <li>
                    {
                        title.length > 30 ?
                            `${title.substring(0, 30)}...` : title
                    }
                </li>
            </ul>
        </div>
    )
}

export default SingleBlogBreadCrumb
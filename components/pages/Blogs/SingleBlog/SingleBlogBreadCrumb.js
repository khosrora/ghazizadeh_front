import Link from 'next/link'
import React from 'react'

function SingleBlogBreadCrumb() {
    return (
        <div className="text-sm breadcrumbs mb-4">
            <ul>
                <li><Link href="/">فروشگاه</Link></li>
                <li><Link href="/">لوازم یدکی</Link></li>
                <li>سر سیلندر</li>
            </ul>
        </div>
    )
}

export default SingleBlogBreadCrumb
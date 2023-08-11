import Link from 'next/link'
import React from 'react'

function SingleProductBreadCrumb({title}) {
    return (
        <div className="text-sm breadcrumbs mb-4">
            <ul>
                <li><Link href="/store">فروشگاه</Link></li>
                <li><Link href="/products">محصولات</Link></li>
                <li>{title}</li>
            </ul>
        </div>
    )
}

export default SingleProductBreadCrumb
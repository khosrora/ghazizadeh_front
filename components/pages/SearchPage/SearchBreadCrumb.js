import Link from 'next/link'
import React from 'react'

function SearchBreadCrumb() {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href="/store">فروشگاه</Link></li>
                <li><Link href="/products">محصولات</Link></li>
            </ul>
        </div>
    )
}

export default SearchBreadCrumb
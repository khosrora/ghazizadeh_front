import Link from 'next/link'
import React from 'react'

function SearchBreadCrumb() {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href="/">فروشگاه</Link></li>
                <li><Link href="/">لوازم یدکی</Link></li>
                <li>سر سیلندر</li>
            </ul>
        </div>
    )
}

export default SearchBreadCrumb
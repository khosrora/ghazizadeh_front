import Link from 'next/link'
import React from 'react'

function FinallyPageCrumb() {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href="/">فروشگاه</Link></li>
                <li>نحوه ارسال</li>
            </ul>
        </div>
    )
}

export default FinallyPageCrumb
import Link from 'next/link'
import React from 'react'

function FinallyPageCrumb() {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href="/basket">سبد خرید</Link></li>
                <li>درگاه پرداخت</li>
            </ul>
        </div>
    )
}

export default FinallyPageCrumb
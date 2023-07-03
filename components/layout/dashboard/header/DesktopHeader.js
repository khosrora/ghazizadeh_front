import React from 'react'
import Link from 'next/link'

function DesktopHeader() {
    return (
        <div className='hidden lg:flex lg:justify-between lg:items-center'>
            <ul className="flex justify-start items-center gap-x-4">
                <li>
                    <Link href="/">
                        <p> خانه </p>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <p> فروشگاه </p>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <p> معرفی خودرو </p>
                    </Link>
                </li>
            </ul>
            <div className="">
                <p>09332839823</p>
            </div>
        </div>
    )
}

export default DesktopHeader
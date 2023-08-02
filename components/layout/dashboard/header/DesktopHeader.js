import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

function DesktopHeader() {

    const { user } = useSelector(state => state);
    const userDetails = user.userDetails;

    return (
        <div className='hidden lg:flex lg:justify-between lg:items-center'>
            <ul className="flex justify-start items-center gap-x-4">
                <li>
                    <Link href="/">
                        <p> خانه </p>
                    </Link>
                </li>
                <li>
                    <Link href="/store">
                        <p> فروشگاه </p>
                    </Link>
                </li>
                <li>
                    <Link href="/all_cars">
                        <p> معرفی خودرو </p>
                    </Link>
                </li>
            </ul>
            <div className="">
                <p>{userDetails.phone}</p>
            </div>
        </div>
    )
}

export default DesktopHeader
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { resetForm } from '../../../../store/user/UserSlice'
import { itemsSidebar } from '../../../Constance/ItemsSideBar'
import Logo from '../../../sharedUi/Logo'

function SideBarDesktop() {

    const router = useRouter();
    const dispatch = useDispatch()

    const handleLogout = () => {
        Cookies.remove('car_ghazizadeh');
        router.push("/");
        dispatch(resetForm());
    }


    return (
        <div className='w-full'>
            <Logo />
            <ul className='w-full mt-8 flex flex-col gap-y-4'>
                {
                    itemsSidebar.map(i =>
                        <Link href={i.url} key={i.id}>
                            <li className="w-full py-4 rounded-full px-2 hover:bg-gray-100">
                                <div className="flex justify-start items-center gap-x-4">
                                    {i.svg}
                                    <p>{i.title}</p>
                                </div>
                            </li>
                        </Link>
                    )
                }
                <li className="w-full py-4 rounded-full px-2 cursor-pointer hover:bg-gray-100" onClick={() => handleLogout()}>
                    <div className="flex justify-start items-center gap-x-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4404 14.62L20.0004 12.06L17.4404 9.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.75977 12.06H19.9298" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <p>خروج</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideBarDesktop
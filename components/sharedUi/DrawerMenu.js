import Link from 'next/link'
import React from 'react'
import { NavbarItems } from '../Constance/NavbarItems'
import Logo from './Logo'

function DrawerMenu() {
    return (
        <div className="drawer w-6">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L5 7" stroke="black" strokeLinecap="round" />
                        <path d="M19 12L9 12" stroke="black" strokeLinecap="round" />
                        <path d="M19 17H13" stroke="black" strokeLinecap="round" />
                    </svg>
                </label>
            </div>
            <div className="drawer-side z-[999]">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <div className="flex justify-between items-center">
                        <Logo />
                        <label htmlFor="my-drawer" className="drawer-overlay bg-gray-200 rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75735 16.2426L16.2426 7.75736" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.2426 16.2426L7.75735 7.75736" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                    </div>
                    <ul className='mt-4'>

                        {
                            NavbarItems.map(i =>
                                <li key={i.id} className='py-4'>
                                    <Link href={i.url}>
                                        <p> {i.title} </p>
                                        <br />
                                        <hr />
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default DrawerMenu
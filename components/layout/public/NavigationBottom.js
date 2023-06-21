import Link from 'next/link'
import React from 'react'

function NavigationBottom() {
    return (
        <div className='fixed bottom-2 w-[100%] m-auto px-3 z-50 lg:hidden'>
            <div className="bg-[#FFFFFF] rounded-2xl grid grid-cols-4">
                <Link href="/" >
                    <div className="flex flex-col items-center gap-y-2 justify-center p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 17.99V14.99" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className='text-[8px] font-bold'>خانه</span>
                    </div>
                </Link>
                <Link href="/" >
                    <div className="flex flex-col items-center gap-y-2 justify-center p-2">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.51001 11.22V15.71C3.51001 20.2 5.31001 22 9.80001 22H15.19C19.68 22 21.48 20.2 21.48 15.71V11.22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 12C14.33 12 15.68 10.51 15.5 8.68L14.84 2H10.17L9.49999 8.68C9.31999 10.51 10.67 12 12.5 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.81 12C20.83 12 22.31 10.36 22.11 8.35L21.83 5.6C21.47 3 20.47 2 17.85 2H14.8L15.5 9.01C15.67 10.66 17.16 12 18.81 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.14 12C7.79 12 9.28 10.66 9.44 9.01L9.66 6.8L10.14 2H7.09C4.47001 2 3.47 3 3.11 5.6L2.84 8.35C2.64 10.36 4.12 12 6.14 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 17C10.83 17 10 17.83 10 19.5V22H15V19.5C15 17.83 14.17 17 12.5 17Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='text-[8px] font-bold'>فروشگاه</span>
                    </div>
                </Link>
                <Link href="/" >
                    <div className="flex flex-col items-center gap-y-2 justify-center p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11H20L18.87 5.59C18.55 4.07 18 2.83 15.51 2.83Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.44C8 19 7.79 19.62 7.54 20.37L7.34 20.97C7.15 21.54 7 22 5.92 22H4.04C2.84 22 1.9 20.99 2.01 19.82L2.57 13.73C2.71 12.23 3 11 5.62 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 8H3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 8H20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 3V5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.5 5H13.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 15H9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 15H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='text-[8px] font-bold'>معرفی خودرو</span>
                    </div>
                </Link>
                <Link href="/" >
                    <div className="flex flex-col items-center gap-y-2 justify-center p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='text-[8px] font-bold'>ورود</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBottom
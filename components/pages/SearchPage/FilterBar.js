import React from 'react'

function FilterBar() {
    return (
        <div className='flex justify-between items-center mt-8 lg:hidden'>
            <div className="flex justify-between items-center gap-x-2" onClick={() => window.my_modal_4.showModal()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 22V15" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 5V2" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 22V19" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 9V2" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.5 7V13C9.5 14.1 9 15 7.5 15H5.5C4 15 3.5 14.1 3.5 13V7C3.5 5.9 4 5 5.5 5H7.5C9 5 9.5 5.9 9.5 7Z" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.5 11V17C20.5 18.1 20 19 18.5 19H16.5C15 19 14.5 18.1 14.5 17V11C14.5 9.9 15 9 16.5 9H18.5C20 9 20.5 9.9 20.5 11Z" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='font-bold'>فیلتر</span>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="m-1">مرتب سازی بر اساس</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 left-2">
                    <li className='w-full p-2 cursor-pointer hover:bg-slate-100 rounded-xl'> کمترین قیمت </li>
                    <li className='w-full p-2 cursor-pointer hover:bg-slate-100 rounded-xl'> بیشترین قیمت </li>
                    <li className='w-full p-2 cursor-pointer hover:bg-slate-100 rounded-xl'> جدید ترین </li>
                </ul>
            </div>
        </div>
    )
}

export default FilterBar
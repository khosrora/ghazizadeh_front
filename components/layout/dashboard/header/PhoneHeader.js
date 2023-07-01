import React from 'react'
import BasketLogo from '../../../sharedUi/BasketLogo'
import Logo from '../../../sharedUi/Logo'

function PhoneHeader() {
    return (
        <div>
            <div className="w-full p-4 flex justify-between items-center lg:hidden">
                <div className="flex justify-center items-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L5 7" stroke="black" strokeLinecap="round" />
                        <path d="M19 12L9 12" stroke="black" strokeLinecap="round" />
                        <path d="M19 17H13" stroke="black" strokeLinecap="round" />
                    </svg>
                    <Logo />
                </div>
                <BasketLogo />
            </div>
        </div>
    )
}

export default PhoneHeader
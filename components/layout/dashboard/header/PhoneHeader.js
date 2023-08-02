import React from 'react'
import { useSelector } from 'react-redux';
import BasketLogo from '../../../sharedUi/BasketLogo'
import Logo from '../../../sharedUi/Logo'

function PhoneHeader() {

    const { user } = useSelector(state => state);
    const userDetails = user.userDetails;


    return (
        <div>
            {
                userDetails === null ? null :
                    <div className="w-full p-4 flex justify-between items-center lg:hidden">
                        <div className="flex justify-center items-center">
                            <Logo />
                        </div>
                        <BasketLogo />
                    </div>
            }
        </div>
    )
}

export default PhoneHeader
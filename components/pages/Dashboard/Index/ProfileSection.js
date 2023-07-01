import React from 'react'
import TitleSection from '../../../sharedUi/TitleSection'

function ProfileSection() {
    return (
        <>
            <TitleSection
                title='پروفایل'
                url="/dashboard"
            />
            <div className="bg-[#FFFFFF] w-full rounded-lg p-4 space-y-4">
                <div className="flex flex-col items-start space-y-4 justify-between lg:space-y-0 lg:flex-row  lg:items-center">
                    <p>نام : <span>علی</span></p>
                    <p>نام خانوادگی: <span>ریکی</span></p>
                    <p>شماره موبایل: <span>09338973928</span></p>
                    <p> کدملی: <span>3610786534</span> </p>
                </div>
            </div>
        </>
    )
}

export default ProfileSection
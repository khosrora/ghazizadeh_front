import React from 'react'
import TitleSection from '../../../sharedUi/TitleSection'

function OrdersList() {
    return (
        <>
            <TitleSection
                title='لیست سفارشات'
                url="/dashboard"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    [1, 2].map((i, index) =>
                        <div key={index} className="bg-[#FFFFFF] w-full rounded-lg p-4 space-y-4">
                            <div className="flex justify-between items-center">
                                <p>کد سفارش : <span>1234567</span></p>
                                <p>کد سفارش : <span>120/000 تومان</span></p>
                            </div>
                            <hr />
                            <div className="flex justify-start items-center gap-x-4 overflow-scroll">
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDCfLRNy9IovrJdjC0vIwCGzTCKgWzpIZ7cbBy-3LSmRUEdcfHD2BJ2-8P-Vf2UWxcd0&usqp=CAU'
                                    width={100}
                                    height={100}
                                    className="rounded-md border"
                                />
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDCfLRNy9IovrJdjC0vIwCGzTCKgWzpIZ7cbBy-3LSmRUEdcfHD2BJ2-8P-Vf2UWxcd0&usqp=CAU'
                                    width={100}
                                    height={100}
                                    className="rounded-md border"
                                />
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDCfLRNy9IovrJdjC0vIwCGzTCKgWzpIZ7cbBy-3LSmRUEdcfHD2BJ2-8P-Vf2UWxcd0&usqp=CAU'
                                    width={100}
                                    height={100}
                                    className="rounded-md border"
                                />

                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDCfLRNy9IovrJdjC0vIwCGzTCKgWzpIZ7cbBy-3LSmRUEdcfHD2BJ2-8P-Vf2UWxcd0&usqp=CAU'
                                    width={100}
                                    height={100}
                                    className="rounded-md border"
                                />
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDCfLRNy9IovrJdjC0vIwCGzTCKgWzpIZ7cbBy-3LSmRUEdcfHD2BJ2-8P-Vf2UWxcd0&usqp=CAU'
                                    width={100}
                                    height={100}
                                    className="rounded-md border"
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default OrdersList
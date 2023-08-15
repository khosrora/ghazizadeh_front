import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddress, getAddressUser } from '../../../../store/dashboard/DashboardSlice';

function Address({  setAddressId }) {

    const dispatch = useDispatch();
    const { loadAddress, address } = useSelector(state => state.dashboard);

    useEffect(() => {
        dispatch(getAddressUser());
    }, [])

    function Load() {
        return (
            <div role="status" class="max-w-sm animate-pulse mt-4 ">
                <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
        )
    }

    if (loadAddress) return <Load />
    return (
        <div className="flex flex-col gap-y-4 lg:mt-8">
            {
                address.length === 0 ?
                    <div className="alert shadow-lg text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <p>حداقل یک آدرس اضافه کنید .
                            <span onClick={() => window.my_modal_5.showModal()} className='cursor-pointer mr-4 text-xs'> افزودن آدرس </span>
                        </p>
                    </div>
                    :
                    <>
                        {
                            address.map(i =>
                                <div key={i.id} className="bg-[#FFFFFF] w-full rounded-xl p-4 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <input type="radio" name="radio-10" className="radio checked:bg-red-500"  onClick={() => setAddressId(i.id)} />
                                                <span className="label-text mr-4">نام و نام خانوادگی دریافت کننده: {i.full_name}</span>
                                            </label>
                                        </div>
                                        <div className="cursor-pointer" onClick={() => {
                                            dispatch(deleteAddress(i.id))
                                        }}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.33301 12.5L8.33301 10" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M11.667 12.5L11.667 10" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M2.5 5.83331H17.5V5.83331C17.0353 5.83331 16.803 5.83331 16.6098 5.87174C15.8164 6.02956 15.1962 6.64975 15.0384 7.44313C15 7.63633 15 7.86866 15 8.33331V12.6666C15 14.5523 15 15.4951 14.4142 16.0809C13.8284 16.6666 12.8856 16.6666 11 16.6666H9C7.11438 16.6666 6.17157 16.6666 5.58579 16.0809C5 15.4951 5 14.5523 5 12.6666V8.33331C5 7.86866 5 7.63633 4.96157 7.44313C4.80376 6.64975 4.18356 6.02956 3.39018 5.87174C3.19698 5.83331 2.96466 5.83331 2.5 5.83331V5.83331Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M8.39045 2.80883C8.48541 2.72023 8.69465 2.64194 8.98572 2.5861C9.2768 2.53027 9.63343 2.5 10.0003 2.5C10.3672 2.5 10.7239 2.53027 11.0149 2.5861C11.306 2.64194 11.5152 2.72023 11.6102 2.80883" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <p>آدرس :
                                            <span className='mr-2 text-xs'>
                                                {`${i.province} _  ${i.city}  _ ${i.street} `}
                                            </span>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <p>شماره تماس / کد پستی:
                                            <span className='mr-2 text-xs'>
                                                {`${i.user} / ${i.postal_code}`}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </>
            }
        </div>
    )
}

export default Address
import React from 'react'
import Logo from '../../../sharedUi/Logo'



function GetPhone() {
    return (
        <form method="dialog" className="modal-box  bg-[#F8F9FA]">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="w-full mt-8 flex flex-col justify-center items-center gap-y-6">
                <Logo />
                <div className="w-full p-2 text-right flex flex-col gap-y-8">
                    <span className='font-extrabold text-[16px]'>ورود به حساب کاربری</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px]">شماره موبایل</span>
                        </label>
                        <input type="text" placeholder="شماره تلفن خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                    </div>
                </div>
                <button className='btn rounded-full text-white bg-[#EA0028] w-full'>ارسال کد</button>
            </div>
            <span className='text-xs mr-2'>
                ثبت نام در گروه خودرویی غازی زاده به منزله موافقت با
                <span className='text-blue-400'> قوانین </span> است
            </span>
        </form>
    )
}

export default GetPhone
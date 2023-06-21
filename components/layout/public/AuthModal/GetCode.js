import React, { useEffect, useState } from 'react'
import Logo from '../../../sharedUi/Logo'



function GetCode() {

    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    return (
        <form method="dialog" className="modal-box  bg-[#F8F9FA]">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="w-full mt-8 flex flex-col justify-center items-center gap-y-6">
                <Logo />
                <div className="w-full p-2 text-right flex flex-col gap-y-8">
                    <span className='font-extrabold text-[16px]'>ورود به حساب کاربری</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px]">کد تایید به شماره ۰۹۳۳۲۸۳۹۸۱۲ ارسال شده است</span>
                        </label>
                        <input type="text" placeholder="کد تایید خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                    </div>
                </div>
                <button className='btn rounded-full text-white bg-[#EA0028] w-full'>تایید کد</button>
            </div>
            <div className="text-xs mt-4 mr-2">
                {
                    minutes > 0 || seconds > 0 ?
                        <span className=''>مدت زمان ارسال کد مجدد : {minutes} : {seconds}</span>
                        :
                        <span className='text-blue-400 cursor-pointer'> ارسال مجدد کد </span>
                }
                <br />
            </div>
            <span className='mr-2 mt-8 text-xs'>
                ثبت نام در گروه خودرویی غازی زاده به منزله موافقت با
                <span className='text-blue-400'> قوانین </span> است
            </span>
        </form>
    )
}

export default GetCode
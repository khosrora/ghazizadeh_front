import Link from 'next/link';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Logo from '../../../sharedUi/Logo'
import { checkCode, resetForm } from './../../../../store/user/UserSlice'
import { useForm } from "react-hook-form"
import ErrorMessage from '../../../sharedUi/ErrorMessage';


function GetCode({ load, phoneNumber, errorText, closeBtn }) {

    const dispatch = useDispatch()

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        let payload = {
            phone: phoneNumber,
            password: data.code
        }
        dispatch(checkCode(payload))
    }

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
        <form method="dialog" className="modal-box  bg-[#F8F9FA]" onSubmit={handleSubmit(onSubmit)}>
            <button onClick={() => closeBtn.current.click()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="w-full mt-8 flex flex-col justify-center items-center gap-y-6">
                <Logo />
                <div className="w-full p-2 text-right flex flex-col gap-y-8">
                    <span className='font-extrabold text-[16px]'>ورود به حساب کاربری</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px]">کد تایید به شماره {phoneNumber} ارسال شده است.</span>
                        </label>
                        <span className='text-xs text-red-600 mt-4'> {errorText} </span>
                        <input
                            type="text"
                            placeholder="کد تایید ارسال شده را وارد کنید"
                            className="input input-bordered w-full bg-[#FFFFFF] rounded-full text-center"
                            name='code'
                            {...register("code", {
                                required: { value: true, message: 'این فیلد اجباری است' },
                            })}
                        />
                        {errors.code && <ErrorMessage text={errors.code?.message} />}
                    </div>
                </div>
                <button disabled={load ? true : false} className='btn rounded-full text-white bg-[#EA0028] w-full'>
                    {load ? <span className="loading loading-spinner loading-xs"></span> : 'تایید کد'}
                </button>
            </div>
            <div className="text-xs mt-4 mr-2">
                {
                    minutes > 0 || seconds > 0 ?
                        <span className=''>مدت زمان ارسال کد مجدد : {seconds} : {minutes}</span>
                        :
                        <span className='text-blue-400 cursor-pointer' onClick={() => dispatch(resetForm())}> ارسال مجدد کد </span>
                }
                <br />
            </div>
            <span className='mr-2 mt-8 text-xs'>
                ثبت نام در گروه خودرویی غازی زاده به منزله موافقت با
                <Link href="/terms">  <span className='text-blue-400'> قوانین </span> </Link> است
            </span>
        </form>
    )
}

export default GetCode
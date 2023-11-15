import React from 'react'
import Logo from '../../../sharedUi/Logo'
import { useForm } from "react-hook-form"
import ErrorMessage from '../../../sharedUi/ErrorMessage'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { getCode } from '../../../../store/user/UserSlice'



function GetPhone({ load, closeBtn }) {

    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => { dispatch(getCode(data)) }


    return (
        <form method="dialog" className="modal-box  bg-[#F8F9FA]" onSubmit={handleSubmit(onSubmit)}>
            <button onClick={() => closeBtn.current.click()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="w-full mt-8 flex flex-col justify-center items-center gap-y-6">
                <Logo />
                <div className="w-full p-2 text-right flex flex-col gap-y-8">
                    <span className='font-extrabold text-[16px]'>ورود به حساب کاربری</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px]">شماره موبایل</span>
                        </label>
                        <input
                            type="text" placeholder="شماره تلفن خود را وارد کنید"
                            className="input input-bordered w-full bg-[#FFFFFF] rounded-full"
                            name='phoneNumber'
                            {...register("phoneNumber", {
                                required: { value: true, message: 'این فیلد اجباری است' },
                                pattern: {
                                    value: /^09([0-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/, message: 'شماره تماس وارد شده معتبر نمی باشد'
                                }
                            })}
                        />
                        {errors.phoneNumber && <ErrorMessage text={errors.phoneNumber?.message} />}
                    </div>
                </div>
                <button disabled={load ? true : false} className='btn rounded-full text-white bg-[#EA0028] w-full'>
                    {load ? <span className="loading loading-spinner loading-xs"></span> : 'ارسال کد'}
                </button>
            </div>
            <span className='text-xs mr-2'>
                ثبت نام در گروه خودرویی غازی زاده به منزله موافقت با
                <Link href="/terms"> <span className='text-blue-400'> قوانین </span> </Link> است
            </span>
        </form>
    )
}

export default GetPhone
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleSection from '../../../sharedUi/TitleSection'

import { useForm } from "react-hook-form";
import { editProfileUser } from '../../../../store/user/UserSlice';


function ProfileSection() {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
    const userDetails = user.userDetails;
    const load = user.loadEditProfile;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(editProfileUser(data))
    };


    return (
        <div className='mb-4'>
            <TitleSection
                title='اطلاعات ثبت شده شما'
                url="/dashboard"
                span
            />
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#FFFFFF] w-full rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text text-[14px]">نام ونام خانوادگی</span>
                        </label>
                        <input
                            type="text"
                            placeholder="نام و نام خانوادگی خود را وارد کنید"
                            className="input input-bordered w-full bg-[#FFFFFF] rounded-full"
                            name='last_name'
                            defaultValue={userDetails.last_name}
                            {...register("last_name")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text text-[14px]">پست الکترونیک</span>
                        </label>
                        <input
                            type="text"
                            placeholder="پست الکترونیک خود را وارد کنید"
                            className="input input-bordered w-full bg-[#FFFFFF] rounded-full"
                            name='email'
                            defaultValue={userDetails.email}
                            {...register("email")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text text-[14px]">کد ملی</span>
                        </label>
                        <input
                            type="text"
                            placeholder="کد ملی خود را وارد کنید"
                            className="input input-bordered w-full bg-[#FFFFFF] rounded-full"
                            name='national_code'
                            defaultValue={userDetails.national_code}
                            {...register("national_code")}
                        />
                    </div>
                </div>
                <button disabled={load ? true : false} className='btn rounded-full text-white bg-[#EA0028] w-full lg:w-1/4'>
                    {
                        load ? <span className="loading loading-spinner loading-xs"></span> : 'ویرایش / تکمیل اطلاعات'
                    }
                </button>
            </form>
        </div>
    )
}

export default ProfileSection
import React from 'react'
import { useForm } from "react-hook-form";
import http from '../../../utils/httpService';
import { errorMessage, successMessage } from '../../../utils/toast';
import { BASE_API } from '../../../utils/baseApi';
import ErrorMessage from '../../sharedUi/ErrorMessage';

function ContactUsIndex({ items }) {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const res = await http.post(`${BASE_API}/siteinfo/ticket/`, data);
            if (res.status === 201) {
                reset()
                return successMessage('پیام شما با موفقیت ارسال شد')
            }
        } catch (error) {
            console.log(error);
            errorMessage('لطفا دوباره امتحان کنید')
        }
    }

    return (
        <div className='p-4'>
            <div className="w-full text-center">
                <p className='font-bold text-[24px]'> ارتباط با ما </p>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:gap-x-2">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4 mt-8 lg:w-1/2">
                    <p className='font-bold text-[16px]'>نمایندگی های فروش و خدمات پس از فروش زاهدان</p>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-[14px] font-bold">نام و نام خانوادگی</span>
                        </label>
                        <input
                            {...register("full_name", { required: { value: true, message: 'وارد کردن این فیلد الزامی است' } })}
                            type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-md" />
                        {errors.full_name && <ErrorMessage text={errors.full_name?.message} />}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px] font-bold">شماره تماس</span>
                        </label>
                        <input
                            {...register("phone", { required: { value: true, message: 'وارد کردن این فیلد الزامی است' } })}
                            type="text" placeholder="شماره تماس خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-md" />
                        {errors.phone && <ErrorMessage text={errors.phone?.message} />}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px] font-bold">پیام</span>
                        </label>
                        <textarea
                            {...register("text", { required: { value: true, message: 'وارد کردن این فیلد الزامی است' } })}
                            type="text" placeholder="پیام خود را وارد کنید" className="input input-bordered w-full bg-[#FFFFFF] rounded-md" />
                        {errors.text && <ErrorMessage text={errors.text?.message} />}
                    </div>

                    <button type='submit' className='btn bg-[#EA0028] w-1/2 rounded-full text-white'>ارسال پیام</button>

                </form>


                {
                    items.length === 0 ? null :
                        <div className="flex flex-col justify-start items-start mt-4 lg:w-1/2">
                            {
                                items.map(i =>
                                    <>
                                        <div className="flex flex-col justify-start items-start mt-4 ">
                                            <p className='font-bold text-[16px]'>{i.title}</p>
                                            <div className="bg-red-500 w-1/4 h-[4px] mt-1"></div>
                                        </div>
                                        <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: i.text }}>

                                        </div>
                                    </>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default ContactUsIndex
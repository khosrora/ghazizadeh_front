import React from 'react'
import { useForm } from "react-hook-form";

function AddressCards() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="flex justify-between items-center">
                <p> آدرس های شما </p>
                <p onClick={() => window.my_modal_5.showModal()} className='text-xs text-[#28BAB1] cursor-pointer'> افزودن آدرس </p>
            </div>
            <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-[#F8F9FA] space-y-4 ">
                    <p className="font-bold">اطلاعات تحویل گیرنده</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[14px]">نام ونام خانوادگی</span>
                            </label>
                            <input
                                {...register("firstName")}
                                type="text" placeholder="نام ونام خانواگی خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[14px]">شماره تلفن</span>
                            </label>
                            <input
                                {...register("firstName")}
                                type="text" placeholder="شماره تلفن خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[14px]">کد پستی</span>
                            </label>
                            <input
                                {...register("firstName")}
                                type="text" placeholder="کد پستی خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[14px]">استان</span>
                            </label>
                            <input
                                {...register("firstName")}
                                type="text" placeholder="استان خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[14px]">شهر</span>
                            </label>
                            <input
                                {...register("firstName")}
                                type="text" placeholder="شهر خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px]">آدرس</span>
                        </label>
                        <textarea
                            {...register("firstName")}
                            type="text" placeholder="آدرس خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF]"></textarea>
                    </div>
                    <button className='btn rounded-full text-white bg-[#EA0028] w-full lg:w-1/6'>ثبت آدرس</button>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default AddressCards
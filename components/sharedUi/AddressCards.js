import React, { useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addAddress } from '../../store/dashboard/DashboardSlice';
import { successMessage } from '../../utils/toast';
import { cities } from '../Constance/Cities';
import { province } from "./../../components/Constance/Province";
import ErrorMessage from './ErrorMessage';

function AddressCards() {

    const SubmitButton = useRef();
    const dispatch = useDispatch()

    const [provinceId, setProvinceId] = React.useState(null);
    const [cityId, setCityId] = React.useState(null);
    const [city, setCity] = React.useState([]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        let payload = {
            full_name: data.full_name,
            street: data.street,
            postal_code: data.postal_code,
            province: Number(provinceId),
            city: Number(cityId),
            desc: ''
        }
        dispatch(addAddress(payload))
        SubmitButton.current.submit();
        successMessage('آدرس با موفقیت اضافه شد')
        reset()
        setProvinceId(null)
        setCityId(null)
    }

    useEffect(() => {
        if (provinceId !== null) {
            const allCitiesProvince = cities.filter(item => item.fields.province_id == provinceId);
            setCity(allCitiesProvince);
        }
    }, [provinceId])

    return (
        <>
            <div className="flex justify-between items-center">
                <p> آدرس های شما </p>
                <p onClick={() => window.my_modal_5.showModal()} className='text-xs text-[#28BAB1] cursor-pointer'> افزودن آدرس </p>
            </div>
            <dialog id="my_modal_5" className="modal">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box w-11/12 max-w-5xl bg-[#F8F9FA] space-y-4 ">
                    <p className="font-bold">اطلاعات تحویل گیرنده</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[14px]">استان</span>
                            </label>
                            <select className="input input-bordered w-full bg-[#FFFFFF] rounded-full" onChange={(e) => setProvinceId(e.target.value)}>
                                <option disabled selected></option>
                                {
                                    province.map(i =>
                                        <option key={i.pk} value={i.pk}>{i.fields.name}</option>
                                    )
                                }
                            </select>
                            {errors.province && <ErrorMessage text={errors.province?.message} />}
                        </div>

                        <div className="form-control w-full">
                            {
                                provinceId !== null ?
                                    <>
                                        <label className="label">
                                            <span className="label-text text-[14px]">شهر</span>
                                        </label>
                                        <select className="input input-bordered w-full bg-[#FFFFFF] rounded-full"
                                            onChange={(e) => setCityId(e.target.value)}
                                        >
                                            <option disabled selected></option>
                                            {
                                                city.map(i =>
                                                    <option key={i.pk} value={i.pk}>{i.fields.name}</option>
                                                )
                                            }
                                        </select>
                                        {errors.city && <ErrorMessage text={errors.city?.message} />}
                                    </>
                                    : null
                            }
                        </div>

                        {
                            provinceId !== null && cityId !== null ?
                                <>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-[14px]">نام ونام خانوادگی</span>
                                        </label>
                                        <input
                                            {...register("full_name", { required: { value: true, message: 'وارد کردن این فیلد ضروری است' } })}
                                            type="text" placeholder="نام ونام خانواگی خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                                        {errors.full_name && <ErrorMessage text={errors.full_name?.message} />}
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-[14px]">کد پستی</span>
                                        </label>
                                        <input
                                            {...register("postal_code", { required: { value: true, message: 'وارد کردن این فیلد ضروری است' } })}
                                            type="text" placeholder="کد پستی خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF] rounded-full" />
                                        {errors.postal_code && <ErrorMessage text={errors.postal_code?.message} />}
                                    </div>
                                </>
                                : null
                        }
                    </div>
                    {
                        provinceId !== null && cityId !== null ?
                            <>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-[14px]">آدرس</span>
                                    </label>
                                    <textarea
                                        {...register("street", { required: { value: true, message: 'وارد کردن این فیلد ضروری است' } })}
                                        type="text" placeholder="آدرس خود را وارد نمایید" className="input input-bordered w-full bg-[#FFFFFF]" />
                                    {errors.street && <ErrorMessage text={errors.street?.message} />}
                                </div>
                                <button type='submit' className='btn rounded-full text-white bg-[#EA0028] w-full lg:w-1/6'>ثبت آدرس</button>
                            </>
                            : null
                    }
                </form>
                <form ref={SubmitButton} method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default AddressCards
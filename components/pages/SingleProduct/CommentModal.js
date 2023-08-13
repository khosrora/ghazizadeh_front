import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../store/public/publicSlice';
import { errorMessage } from '../../../utils/toast';
import ErrorMessage from '../../sharedUi/ErrorMessage';

function CommentModal({ productId }) {

    const btnRef = useRef();
    const dispatch = useDispatch();

    const { userDetails } = useSelector(state => state.user)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async data => {
        let payload = {
            full_name: data.full_name,
            text: data.text,
            product: productId,
            user: userDetails.id
        }
        dispatch(addComment(payload))
        reset();
        btnRef.current.submit();        
    };


    return (
        <>
            <div onClick={() => {
                if (!!userDetails) {
                    window.my_modal_1.showModal()
                } else {
                    errorMessage('لطفا ابتدا وارد وب سایت شوید')
                }
            }} className="btn w-full rounded-full border-[#EA0028] text-[#EA0028] bg-[#F8F9FA] mt-8">نظر خود را وارد نمایید</div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">نظر خود را اینجا بنویسید</h3>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-[14px]">نام و نام خانوادگی</span>
                        </label>
                        <input
                            type="text"
                            placeholder="کد تایید ارسال شده را وارد کنید"
                            className="input input-bordered w-full text-xs bg-[#FFFFFF] rounded-md"
                            name='full_name'
                            {...register("full_name", {
                                required: { value: true, message: 'این فیلد اجباری است' },
                            })}
                        />
                        {errors.full_name && <ErrorMessage text={errors.full_name?.message} />}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[14px]">متن پیام</span>
                        </label>
                        <textarea
                            name='text'
                            {...register("text", {
                                required: { value: true, message: 'این فیلد اجباری است' },
                            })}
                            placeholder='نطر خود را اینجا بنویسید'
                            className="textarea w-full text-xs textarea-bordered"
                        />
                        {errors.text && <ErrorMessage text={errors.text?.message} />}
                    </div>
                    <button type='submit' className="btn w-full rounded-full  text-white bg-[#EA0028] mt-8">نظر خود را وارد نمایید</button>
                </form>
                <form ref={btnRef} method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default CommentModal
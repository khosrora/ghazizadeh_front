import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getBasketState } from '../../../../store/basket/BasketSlice';
import { getUserState } from '../../../../store/user/UserSlice';
import { errorMessage } from '../../../../utils/toast';
import http from './../../../../utils/httpService'

function DetailsFinallyPage({ addressId, postsType }) {

    const { basket } = useSelector(getBasketState);
    const { userDetails } = useSelector(getUserState);
    const [total, setTotal] = useState()
    const [postId, setPostId] = useState(postsType[0].id);
    const [postPrice, setPostPrice] = useState(postsType[0].price);

    useEffect(() => {
        const getTotal = () => {
            const total = basket.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(total);
        }
        getTotal()
    }, [basket])

    const handleGetPayment = async () => {
        if (!addressId) return errorMessage('حداقل یک آدرس انتخاب کنید');
        let data = {
            items: basket,
            total_price: total,
            phone: userDetails.phone,
            address: addressId,
            payment_method: postId
        }

        try {
            const token = Cookies.get('car_ghazizadeh')
            const res = await http.post('/store/place_order', data, {
                headers: { Authorization: 'token ' + token }
            });
            console.log(res.data);
        } catch (error) {
            errorMessage('لطفا دوباره امتحان کنید')
        }

    }


    return (
        <div className='flex flex-col gap-y-6 bg-[#FFFFFF] p-4 mt-4 rounded-xl lg:mt-0'>
            <div className="flex justify-between items-center">
                <p className='text-[12px] font-bold text-[#666666]'> جمع کل سبد خرید : </p>
                <p className='font-bold'>{new Intl.NumberFormat().format(total)} <span className='text-[8px]'>تومان</span></p>
            </div>
            <hr />
            {
                postsType.map(post =>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-x-4">
                            <input type="radio" name="radio-9" className="radio checked:bg-red-500" checked={postId === post.id ? true : false} onChange={() => {
                                setPostId(post.id)
                                setPostPrice(post.price)
                            }} />
                            <p className='text-[12px] font-bold text-[#199EA7]'> {post.title} : </p>
                        </div>
                        <p className='font-bold text-[#199EA7]'>{new Intl.NumberFormat().format(post.price)} <span className='text-[8px]'>تومان</span></p>
                    </div>
                )
            }
            <hr />
            <div className="flex justify-between items-center">
                <p className='text-[12px] font-bold text-[#666666]'> هزینه نهایی : </p>
                <p className='font-bold'>{new Intl.NumberFormat().format(total + parseInt(postPrice))}<span className='text-[8px]'>تومان</span></p>
            </div>
            <hr />
            <button onClick={() => handleGetPayment()} className='btn w-full bg-[#EA0028] text-white rounded-full'>درگاه پرداخت</button>
        </div>
    )
}

export default DetailsFinallyPage
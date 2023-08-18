import React from 'react'
import { useSelector } from 'react-redux'
import { getDashboardState } from '../../../../store/dashboard/DashboardSlice'
import CustomLoader from '../../../sharedUi/CustomLoader'
import TitleSection from '../../../sharedUi/TitleSection'

function OrdersList() {

    const { orders, loadOrders } = useSelector(getDashboardState)

    if (loadOrders) return <CustomLoader />
    return (
        <>
            <TitleSection
                title='لیست سفارشات'
                url="/dashboard"
                span
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    orders.map((order) =>
                        <div key={order.id} className="bg-[#FFFFFF] w-full rounded-lg p-4 space-y-4">
                            <div className="flex justify-between items-center">
                                <p className='text-xs'>کد سفارش : <span>{order.code}</span></p>
                                <p className='text-xs'>کد سفارش : <span>{new Intl.NumberFormat().format(order.total_price)} تومان</span></p>
                            </div>
                            <hr />
                            <div className="flex justify-start items-center gap-x-4 overflow-scroll">
                                {
                                    order.items.map(product =>
                                        <img
                                            key={product.id}
                                            src={product.image_url}
                                            width={100}
                                            height={100}
                                            className="rounded-md border"
                                        />
                                    )
                                }
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p className='text-xs'>آدرس ثبت شده : {order.address.street}</p>
                                <p className='text-xs'>وضعیت :
                                    {
                                        order.state === 'C' ? <span className='badge text-xs text-error'>لغو شد</span> : order.state === 'P' ? <span className='badge text-xs text-warning'>در حال بررسی</span> : <span className='badge text-xs text-success'>ارسال شده</span>
                                    }
                                </p>
                                <p className='text-xs'>{order.payment_method.title}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default OrdersList
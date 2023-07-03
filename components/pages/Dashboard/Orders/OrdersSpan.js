import React from 'react'

function OrdersSpan() {
    return (
        <div className="flex justify-start items-center gap-x-4">
            <div className="badge p-4 cursor-pointer"> جاری </div>
            <div className="badge p-4 cursor-pointer"> در انتظار ارسال </div>
            <div className="badge p-4 cursor-pointer"> ارسال شده </div>
        </div>
    )
}

export default OrdersSpan
import React from 'react'

function DashboardLoading() {
    return (
        <div className='fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
            <div className="flex justify-start items-center">
                <span className="loading loading-dots loading-lg"></span>
                <p>در حال دریافت اطلاعات</p>
            </div>
        </div>
    )
}

export default DashboardLoading
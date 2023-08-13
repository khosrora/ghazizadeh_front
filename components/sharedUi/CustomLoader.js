import React from 'react'

function CustomLoader() {
    return (
        <div className='w-full flex justify-center items-center py-4'>
            <div className="flex justify-start items-center gap-y-4">
                <span className="loading loading-spinner loading-xs"></span>
                <p>در حال دریافت اطلاعات</p>
            </div>
        </div>
    )
}

export default CustomLoader 
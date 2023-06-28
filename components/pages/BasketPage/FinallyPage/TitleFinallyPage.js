import React from 'react'

function TitleFinallyPage() {
    return (
        <>
            <div className="flex justify-between items-center">
                <p> اطلاعات تحویل گیرنده </p>
                <p onClick={() => window.my_modal_5.showModal()} className='text-xs text-[#28BAB1] cursor-pointer'> افزودن آدرس </p>
            </div>
            <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default TitleFinallyPage
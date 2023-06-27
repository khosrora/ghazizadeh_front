import React from 'react'

function CommentModal() {
    return (
        <>
            <div onClick={() => window.my_modal_1.showModal()} className="btn w-full rounded-full border-[#EA0028] text-[#EA0028] bg-[#F8F9FA] mt-8">نظر خود را وارد نمایید</div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">نظر خود را اینجا بنویسید</h3>
                    <textarea className="textarea w-full mt-4 textarea-error" placeholder="" ></textarea>
                    <div className="btn w-full rounded-full  text-white bg-[#EA0028] mt-8">نظر خود را وارد نمایید</div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default CommentModal
import React from 'react'
import GetCode from './GetCode'
import GetPhone from './GetPhone'

function IndexAuth() {
    return (
        <>
            <dialog id="my_modal_2" className="modal">
                {/* <GetPhone /> */}
                <GetCode />
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default IndexAuth
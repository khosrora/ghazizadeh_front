import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import GetCode from './GetCode'
import GetPhone from './GetPhone'

function IndexAuth() {

    const SubmitButton = useRef();
    const closeBtn = useRef();

    const { user } = useSelector(state => state);
    const load = user.loading;
    const phoneNumber = user.phoneNumber;
    const getCode = user.getCode;
    const errorText = user.errorText;
    const modal = user.modal;

    useEffect(() => {
        if (!modal) {
            SubmitButton.current.submit();
        }
    }, [modal])

    return (
        <>
            <dialog id="my_modal_2" className="modal">
                {
                    !getCode ?
                        <GetPhone load={load} closeBtn={closeBtn} />
                        :
                        <GetCode load={load} phoneNumber={phoneNumber} errorText={errorText} closeBtn={closeBtn} />
                }
                <form method="dialog" className="modal-backdrop" ref={SubmitButton}>
                    <button ref={closeBtn}>close</button>
                </form>
            </dialog>
        </>
    )
}

export default IndexAuth
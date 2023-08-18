import React from 'react'
import { useRouter } from 'next/router'
import CustomLoader from '../../components/sharedUi/CustomLoader';
import SuccessPayment from '../../components/sharedUi/SuccessPayment';
import ErrorPayment from '../../components/sharedUi/ErrorPayment';


function Index() {

    const router = useRouter();
    const { status, RefID } = router.query;

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {
                !status ? <CustomLoader /> :
                    status === "OK" ? <SuccessPayment refId={RefID} /> : <ErrorPayment />
            }
        </div>
    )
}

export default Index
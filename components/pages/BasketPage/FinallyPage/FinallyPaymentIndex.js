import React from 'react'
import Address from './Address'
import DetailsFinallyPage from './DetailsFinallyPage'
import FinallyPageCrumb from './FinallyPageCrumb'
import TitleFinallyPage from './TitleFinallyPage'

function FinallyPaymentIndex() {
  return (
    <div className='px-4 space-y-4'>
      <FinallyPageCrumb />
      <div className="lg:grid lg:grid-cols-6 lg:gap-x-10">
        <div className="lg:col-span-4">
          <TitleFinallyPage />
          <Address />
        </div>
        <div className="lg:col-span-2">
          <DetailsFinallyPage />
        </div>
      </div>
    </div>
  )
}

export default FinallyPaymentIndex
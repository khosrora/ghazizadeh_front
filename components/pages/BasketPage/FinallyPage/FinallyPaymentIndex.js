import React, { useState } from 'react'
import AddressCards from '../../../sharedUi/AddressCards'
import Address from './Address'
import DetailsFinallyPage from './DetailsFinallyPage'
import FinallyPageCrumb from './FinallyPageCrumb'

function FinallyPaymentIndex({ postsType }) {

  const [addressId, setAddressId] = useState();


  return (
    <div className='px-4 space-y-4'>
      <FinallyPageCrumb />
      <div className="lg:grid lg:grid-cols-6 lg:gap-x-10">
        <div className="lg:col-span-4">
          <AddressCards />
          <Address addressId={addressId} setAddressId={setAddressId} />
        </div>
        <div className="lg:col-span-2">
          <DetailsFinallyPage addressId={addressId} postsType={postsType} />
        </div>
      </div>
    </div>
  )
}

export default FinallyPaymentIndex
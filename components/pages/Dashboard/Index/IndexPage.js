import React from 'react'
import Address from '../../BasketPage/FinallyPage/Address'
import TitleFinallyPage from '../../../sharedUi/AddressCards'
import ProfileSection from './ProfileSection'

function IndexPage() {
  return (
    <>
      <ProfileSection />
      <TitleFinallyPage />
      <Address />
    </>
  )
}

export default IndexPage
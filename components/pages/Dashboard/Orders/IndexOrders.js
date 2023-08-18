import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getOrdersUser } from '../../../../store/dashboard/DashboardSlice';
import OrdersList from '../Index/OrdersList'

function IndexOrders() {

  // const [state, setState] = useState("P");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersUser())
  }, [])

  return (
    <>
      {/* <OrdersSpan state={state} /> */}
      <OrdersList />
    </>
  )
}

export default IndexOrders
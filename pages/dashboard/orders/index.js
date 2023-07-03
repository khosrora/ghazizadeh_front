import React from 'react'
import LayoutDashboard from '../../../components/layout/dashboard/LayoutDashboard'
import IndexOrders from '../../../components/pages/Dashboard/Orders/IndexOrders'

function index() {
    return (
        <LayoutDashboard>
            <IndexOrders />
        </LayoutDashboard>
    )
}

export default index
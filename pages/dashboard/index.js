import React from 'react'
import LayoutDashboard from '../../components/layout/dashboard/LayoutDashboard'
import IndexPage from '../../components/pages/Dashboard/Index/IndexPage'

function index() {
    return (
        <LayoutDashboard>
            <IndexPage />
        </LayoutDashboard>
    )
}

export default index
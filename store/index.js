import { configureStore } from '@reduxjs/toolkit'

import dashboardReducer from './dashboard/DashboardSlice'
import counterReducer from './user/UserSlice'


export const store = configureStore({
    reducer: {
        user: counterReducer,
        dashboard: dashboardReducer
    },
    devTools: true
})
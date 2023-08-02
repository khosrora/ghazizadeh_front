import { configureStore } from '@reduxjs/toolkit'

import dashboardReducer from './dashboard/DashboardSlice'
import userReducer from './user/UserSlice'
import blogsReducer from './blogs/BlogsSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        dashboard: dashboardReducer,
        blogs: blogsReducer
    },
    devTools: true
})
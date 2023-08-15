import { configureStore } from '@reduxjs/toolkit'

import dashboardReducer from './dashboard/DashboardSlice'
import userReducer from './user/UserSlice'
import blogsReducer from './blogs/BlogsSlice'
import publicSlice from './public/publicSlice'
import BasketSlice from './basket/BasketSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        dashboard: dashboardReducer,
        blogs: blogsReducer,
        public: publicSlice,
        basket: BasketSlice
    },
    devTools: true
})
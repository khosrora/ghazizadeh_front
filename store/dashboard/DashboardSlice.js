import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import http from '../../utils/httpService';
import { errorMessage } from '../../utils/toast';



const initialState = {
  loadAddress: false,
  address: [],
  loadAddAddress: false,
  orders: [],
  loadOrders: false
}

export const getAddressUser = createAsyncThunk(
  'dashboard/getAddressUser', async () => {
    try {

      const token = Cookies.get('car_ghazizadeh');
      const res = await http.get('/address/address', {
        headers: {
          Authorization: "token " + token
        }
      })
      return res.data
    } catch (error) {
      rejected()
    }
  }
)

export const addAddress = createAsyncThunk(
  'dashboard/addAddress', async (data) => {
    try {

      const token = Cookies.get('car_ghazizadeh');
      const res = await http.post('/address/address/', data, {
        headers: {
          Authorization: "token " + token
        }
      })
      return res.data
    } catch (error) {
      rejected()
    }
  }
)

export const deleteAddress = createAsyncThunk(
  'dashboard/deleteAddress', async (id) => {
    try {
      const token = Cookies.get('car_ghazizadeh');
      await http.delete(`/address/address/${id}`, {
        headers: {
          Authorization: "token " + token
        }
      })
      return id
    } catch (error) {
      rejected()
    }
  }
)

export const getOrdersUser = createAsyncThunk(
  'dashboard/getOrdersUser', async (id) => {
    try {
      const token = Cookies.get('car_ghazizadeh');
      const res = await http.get(`/store/order/`, {
        headers: {
          Authorization: "token " + token
        }
      })
      return res.data
    } catch (error) {
      rejected()
    }
  }
)




export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAddressUser.pending, (state) => {
      state.loadAddress = true;
    })
    builder.addCase(getAddressUser.fulfilled, (state, action) => {
      state.address = action.payload;
      state.loadAddress = false;
    })
    builder.addCase(getAddressUser.rejected, (state) => {
      state.address = [];
      state.loadAddress = false;
    })

    builder.addCase(addAddress.pending, (state) => {
      state.loadAddAddress = true;
    })
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.loadAddAddress = false;
      state.address.push(action.payload)
    })
    builder.addCase(addAddress.rejected, (state) => {
      state.loadAddAddress = false;
    })


    builder.addCase(deleteAddress.pending, (state) => {
      state.loadAddress = true;
    })
    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      state.loadAddress = false;
      state.address = state.address.filter(item => item.id !== action.payload)
      errorMessage('آدرس با موفقیت حذف شد')
    })
    builder.addCase(deleteAddress.rejected, (state) => {
      state.loadAddress = false;
    })


    builder.addCase(getOrdersUser.pending, (state) => {
      state.loadOrders = true;
    })
    builder.addCase(getOrdersUser.fulfilled, (state, action) => {
      state.loadOrders = false;
      state.orders = action.payload
    })
    builder.addCase(getOrdersUser.rejected, (state) => {
      state.loadOrders = false;
    })



  }

})

export const { } = dashboardSlice.actions

export default dashboardSlice.reducer

export const getDashboardState = (state) => state.dashboard;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import http from '../../utils/httpService';



const initialState = {
  loadAddress: false,
  address: [],
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
      console.log(error);
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
  }

})

export const { } = dashboardSlice.actions

export default dashboardSlice.reducer
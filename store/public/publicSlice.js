import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import http from '../../utils/httpService';
import { successMessage } from '../../utils/toast';


const initialState = {
  loadAddComment: false,
  cars: [],
  products: []
}


export const addComment = createAsyncThunk(
  'public/addComment', async (data) => {
    try {
      const token = Cookies.get('car_ghazizadeh');
      await http.post(`store/comment`, data, {
        headers: { Authorization: 'token ' + token }
      })
      return data
    } catch (error) {
      console.log(error);
      rejected()
    }
  }
)

export const getCars = createAsyncThunk(
  'public/getCars', async (link) => {
    try {
      const res = await http.get(link)
      return res.data.results;
    } catch (error) {
      console.log(error);
      rejected()
    }
  }
)

export const getProducts = createAsyncThunk(
  'public/getProducts', async (link) => {
    try {
      const res = await http.get(link)
      return res.data.results;
    } catch (error) {
      console.log(error);
      rejected()
    }
  }
)


export const publicSlice = createSlice({
  name: 'public',
  initialState,
  reducers: {
    getFirstCar: (state, action) => {
      state.cars = action.payload;
    },
    getFirstProduct: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {

    builder.addCase(addComment.pending, (state) => {
      state.loadAddComment = true
    })
    builder.addCase(addComment.fulfilled, (state) => {
      state.loadAddComment = false;
      successMessage('نظر شما بعد از تایید مدیریت نمایش داده میشود.')
    })
    builder.addCase(addComment.rejected, (state) => {
      state.loadAddComment = false;
    })

    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = [...state.cars, ...action.payload]
    })

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = [...state.products, ...action.payload]
    })

  }

})

export const { getFirstCar , getFirstProduct } = publicSlice.actions

export default publicSlice.reducer

export const getPublicState = (state) => state.public;
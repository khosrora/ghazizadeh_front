import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import http from '../../utils/httpService';
import { errorMessage } from '../../utils/toast';



const initialState = {
  basket: []
}

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs', async (link) => {
    try {

      const res = await http.get(link)
      return res.data
    } catch (error) {
      rejected()
    }
  }
)


export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;
      const filter = state.basket.some(item => item.id === product.id);

      if (filter) {
        errorMessage('این محصول در سبد خرید وجود دارد')
      } else {
        let item = {
          id: product.id,
          title: product.title,
          image: product.gallery[0].image,
          price: product.price,
          count: 1
        }
        state.basket.push(item)
      }
    },
    deleteItemFromCart: (state, action) => {
      const id = action.payload;
      const newBasket = state.basket.filter(item => item.id !== id);
      state.basket = newBasket
    },
    plusItemFromCart: (state, action) => {
      const id = action.payload;
      state.basket.forEach(item => {
        if (item.id === id) {
          item.count += 1
        }
      })
    },
    minusItemFromCart: (state, action) => {
      const id = action.payload;
      state.basket.forEach(item => {
        if (item.id === id) {
          item.count -= 1
        }
      })
    }
  },
  extraReducers: (builder) => {


  }

})

export const { addToBasket, deleteItemFromCart, plusItemFromCart, minusItemFromCart } = BasketSlice.actions

export default BasketSlice.reducer

export const getBasketState = (state) => state.basket;
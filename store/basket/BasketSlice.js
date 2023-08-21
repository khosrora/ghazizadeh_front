import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import http from '../../utils/httpService';
import { errorMessage, successMessage } from '../../utils/toast';


export let BasketName = 'gh_basket'

const initialState = {
  basket: [],
  percentage: null,
  discountId: null,
  load: false
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

export const checkDiscountCode = createAsyncThunk(
  'blogs/checkDiscountCode', async (code) => {
    try {
      const token = Cookies.get('car_ghazizadeh');
      const res = await http.get(`/discount/get_code/${code}`, {
        headers: { Authorization: "token " + token }
      })
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
    setBasketLists: (state, action) => {
      state.basket = action.payload
    },
    addToBasket: (state, action) => {
      const product = action.payload;
      const filter = state.basket.some(item => item.id === product.id);
      if (filter) {
        errorMessage('این محصول در سبد خرید وجود دارد')
      } else {
        let item = {
          product_id: product.id,
          title: product.title,
          image_url: product.gallery[0].image,
          price: product.price,
          brand: product.brand.title,
          count: 1
        }
        const res = JSON.parse(Cookies.get(BasketName))
        res.push(item)
        Cookies.set(BasketName, JSON.stringify(res))
        state.basket.push(item);
        successMessage('محصول به سبد خرید اضافه شد')
      }
    },
    deleteItemFromCart: (state, action) => {
      const id = action.payload;
      const newBasket = state.basket.filter(item => item.product_id !== id);
      state.basket = newBasket;
      Cookies.set(BasketName, JSON.stringify(newBasket))
    },
    plusItemFromCart: (state, action) => {
      const id = action.payload;
      state.basket.forEach(item => {
        if (item.product_id === id) {
          item.count += 1
        }
      })
      Cookies.set(BasketName, JSON.stringify(state.basket))
    },
    minusItemFromCart: (state, action) => {
      const id = action.payload;
      state.basket.forEach(item => {
        if (item.product_id === id) {
          item.count -= 1
        }
      })
      Cookies.set(BasketName, JSON.stringify(state.basket))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkDiscountCode.pending, (state) => {
      state.load = true
    })
    builder.addCase(checkDiscountCode.fulfilled, (state, action) => {
      state.load = true;
      state.percentage = action.payload.percentage;
      state.discountId = action.payload.id;
      successMessage('کد تخفیف اعمال شد')
    })
    builder.addCase(checkDiscountCode.rejected, (state) => {
      state.load = false;
      state.percentage = null;
      errorMessage('کد وارد شده معتبر نمی باشد')
    })
  }

})

export const { addToBasket, deleteItemFromCart, plusItemFromCart, minusItemFromCart, setBasketLists } = BasketSlice.actions

export default BasketSlice.reducer

export const getBasketState = (state) => state.basket;
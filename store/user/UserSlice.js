import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import http from '../../utils/httpService';
import { errorMessage, successMessage } from '../../utils/toast';

const initialState = {
  getCode: false,
  phoneNumber: null,
  loading: false,
  errorText: '',
  userDetails: null,
  modal: true,
  loadEditProfile: false,
}


export const getCode = createAsyncThunk(
  'auth/getCode', async (data) => {
    try {
      const res = await http.post('/account/login_or_register/', { phone: data.phoneNumber });
      return res.data.phone;
    } catch (error) {
      rejected()
    }
  }
)

export const checkCode = createAsyncThunk(
  'auth/checkCode', async (data) => {
    try {
      const res = await http.post('/account/token/', data);
      if (res.status === 200) {
        Cookies.set("car_ghazizadeh", res.data.token, { expires: 90 })
        const user = await http.get('/account/me', {
          headers: {
            Authorization: "token " + res.data.token
          }
        });
        return user.data
      }
    } catch (error) {
      rejected()
    }
  }
)

export const getUser = createAsyncThunk(
  'auth/getUser', async (token) => {
    try {
      const user = await http.get('/account/me', {
        headers: {
          Authorization: "token " + token
        }
      })
      return user.data
    } catch (error) {
      rejected()
    }
  }
)

export const editProfileUser = createAsyncThunk(
  'auth/editProfileUser', async (data) => {
    try {

      const token = Cookies.get('car_ghazizadeh');
      const res = await http.put('/account/me/', data, {
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


export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.loading = false;
      state.getCode = false;
      state.phoneNumber = null;
      state.modal = true;
      state.userDetails = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCode.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getCode.fulfilled, (state, action) => {
      state.loading = false;
      state.getCode = true;
      state.phoneNumber = action.payload;
      successMessage('کد ورود ارسال شد')
    })
    builder.addCase(getCode.rejected, (state) => {
      state.loading = false;
      state.getCode = false;
      state.phoneNumber = null;
      errorMessage('لطفا دوباره امتحان کنید')
    })

    builder.addCase(checkCode.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(checkCode.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
      state.modal = false;
    })
    builder.addCase(checkCode.rejected, (state, action) => {
      state.loading = false;
      state.userDetails = null;
      state.errorText = 'کد وارد شده معتبر نمی باشد';
    })

    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
      state.modal = false;
    })
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
      state.userDetails = null;
      state.modal = false;
    })


    builder.addCase(editProfileUser.pending, (state) => {
      state.loadEditProfile = true
    })
    builder.addCase(editProfileUser.fulfilled, (state, action) => {
      state.loadEditProfile = false;
      state.userDetails = action.payload;
      successMessage('اطلاعات شما بروزرسانی شد.')
    })
    builder.addCase(editProfileUser.rejected, (state) => {
      state.loadEditProfile = false;
    })

  }
})

export const { resetForm } = userSlice.actions

export default userSlice.reducer
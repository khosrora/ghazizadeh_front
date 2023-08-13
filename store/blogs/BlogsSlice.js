import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import http from '../../utils/httpService';



const initialState = {
  loadBlogs: false,
  loadNext: false,
  blogs: [],
  next: null,
  count: null
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

export const getNextPageBlog = createAsyncThunk(
  'blogs/getNextPageBlog', async (link) => {
    try {
      const res = await http.get(link);
      return res.data
    } catch (error) {
      rejected()
    }
  }
)

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loadBlogs = true
    })
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.links.next;
      state.loadBlogs = false
    })
    builder.addCase(getBlogs.rejected, (state) => {
      state.blogs = []
      state.loadBlogs = false
    })

    builder.addCase(getNextPageBlog.pending, (state) => {
      state.loadNext = true
    })
    builder.addCase(getNextPageBlog.fulfilled, (state, action) => {
      state.blogs = [...state.blogs, ...action.payload.results]
      state.next = action.payload.links.next;
      state.loadNext = false
    })
    builder.addCase(getNextPageBlog.rejected, (state) => {
      state.blogs = []
      state.loadNext = false
    })

  }

})

export const { } = blogsSlice.actions

export default blogsSlice.reducer
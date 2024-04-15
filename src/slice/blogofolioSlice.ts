import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../types/interfaces'


export const fetchBlog = createAsyncThunk(
  'blogofolio/fetchBlog',
  async function (_, { rejectWithValue }) {
    try {
      const responce = await fetch("https://studapi.teachmeskills.by/blog/posts/");
      if (!responce.ok) {
        throw new Error("ERROR")
      }
      const data = await responce.json();
      return data;
    }
    catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)



export const blogofolioSlice = createSlice({
  name: 'blogofolio',
  initialState: {
    like: 0,
    dislike: 0,
    favorites: [],
    selectedTab: "All",
    status: null,
    error: null,
    blogs: []
  },
  reducers: {
    increment: (state: IInitialState) => {
      state.like += 1
    },
    decrement: (state: IInitialState) => {
      state.dislike += 1
    },
    addToFavorite: (state: IInitialState, { payload }) => {
      state.favorites = [...state.favorites, payload]
      console.log(current(state));
    },
    changeActiveTab: (state: IInitialState, { payload }) => {
      state.selectedTab = payload;
      console.log(state.selectedTab)
    }
  },
  extraReducers: (builder) => {
    return builder.addCase(fetchBlog.pending, (state: any) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(fetchBlog.fulfilled, (state: any, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.blogs = payload.results;
        console.log(payload);
      }),
      builder.addCase(fetchBlog.rejected, (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      })
  }
})

export const { increment, decrement, addToFavorite, changeActiveTab } = blogofolioSlice.actions

export default blogofolioSlice.reducer;
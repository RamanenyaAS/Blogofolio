import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { IInitialState } from '../types/interfaces'


export const fetchBlog = createAsyncThunk(
  'blogofolio/fetchBlog',
  async function (_, { rejectWithValue }) {
    try {
      const responce = await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=50");
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

export const fetchOnePost = createAsyncThunk(
  'blogofolio/fetchOnePost',
  async function (id: string, { rejectWithValue }) {
    try {
      const responce = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`);
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

export const fetchAuthUser = createAsyncThunk(
  'blogofolio/fetchAuthUser',
  async function (obj: any, { rejectWithValue }) {
    try {
      const responce = await fetch("https://studapi.teachmeskills.by/auth/users/", {
        method: "POST",
        body: JSON.stringify(obj),
      }
      );
      if (!responce.ok) {
        throw new Error("Регистрация не прошла")
      }
      const data = await responce.json();
      console.log(data);
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
    blogs: [],
    selectedPost: null
  },
  reducers: {
    increment: (state: IInitialState) => {
      state.like += 1
    },
    decrement: (state: IInitialState) => {
      state.dislike += 1
    },
    addToFavorite: (state: IInitialState, { payload }) => {
      const isAlreadyAdded = state.favorites.some(item => item.id === payload.id);
      if (isAlreadyAdded) {
        alert("Данный пост уже добавлен в Favorites")
        return;
      }

      state.favorites = [...state.favorites, payload]
      alert("Пост добавлен в Favorites")
      console.log(current(state));
    },
    changeActiveTab: (state: IInitialState, { payload }) => {
      state.selectedTab = payload;
      console.log(state.selectedTab)
    }
  },
  extraReducers: (builder) => {
    return builder.addCase(fetchBlog.pending, (state: IInitialState) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(fetchBlog.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "fulfilled";
        state.blogs = payload.results;
        console.log(payload);
      }),
      builder.addCase(fetchBlog.rejected, (state: IInitialState, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
      }),
      builder.addCase(fetchOnePost.pending, (state: IInitialState) => {
        state.status = "pending";
        state.error = null;
      }),
        builder.addCase(fetchOnePost.fulfilled, (state: IInitialState, { payload }: { payload: any }) => {
          state.status = "fulfilled";
          state.selectedPost = payload;
          console.log(payload);
        }),
        builder.addCase(fetchOnePost.rejected, (state: IInitialState, { payload }: { payload: any }) => {
          state.status = "rejected";
          state.error = payload;
        })
  }
})

export const { increment, decrement, addToFavorite, changeActiveTab } = blogofolioSlice.actions

export default blogofolioSlice.reducer;
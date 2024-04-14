import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../types/interfaces'

export const blogofolioSlice = createSlice({
    name: 'blogofolio',
    initialState:{
        like: 0,
        dislike: 0,
        favorites: [],
        selectedTab: "All"
    },
    reducers: {
      increment: (state: IInitialState) => {
        state.like += 1
      },
      decrement: (state: IInitialState) => {
        state.dislike += 1
      },
      addToFavorite: (state: IInitialState, {payload}) => {
        state.favorites = [...state.favorites, payload]
        console.log(current(state));
      },
      changeActiveTab: (state: IInitialState, {payload}) => {
        state.selectedTab = payload;
        console.log(state.selectedTab)
      }
    },
  })
  
  export const { increment, decrement, addToFavorite, changeActiveTab } = blogofolioSlice.actions
  
  export default blogofolioSlice.reducer
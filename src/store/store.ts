import { configureStore } from "@reduxjs/toolkit";
import blogofolioReducer from "../slice/blogofolioSlice";

const store = configureStore ({
    reducer: blogofolioReducer
})

export default store;

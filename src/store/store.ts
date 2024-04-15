import { configureStore } from "@reduxjs/toolkit";
import blogofolioReducer from "../slice/blogofolioSlice";

const store = configureStore({
  reducer: blogofolioReducer
})

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import blogofolioReducer from "../slice/blogofolioSlice";

// const rootReducer = {
//     blogofolio: blogofolioReducer
// }

// const store = configureStore({
//     reducer: rootReducer
// })

// export default store;

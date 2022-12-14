import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ApiFetch } from "../component/ApiFetch";
import cartReducer from './cartSlice';

const store = configureStore({
    reducer:{
        cart : cartReducer,
        [ApiFetch.reducerPath]: ApiFetch.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiFetch.middleware),
})
setupListeners(store.dispatch)
export default store
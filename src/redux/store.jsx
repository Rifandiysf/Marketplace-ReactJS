import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import { productReducer } from "./productSlice";
import { userReducer } from "./userSlice";
import { bannerReducer } from "./bannerSlice";

export const store = configureStore({
    reducer: combineReducers({
        cart: cartReducer,
        product: productReducer,
        banner: bannerReducer,
        user: userReducer
    })
});
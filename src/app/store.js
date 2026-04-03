import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import orderSlice from "../features/orders/orderSlice";
import productSlice from "../features/products/productSlice"

const store = configureStore ({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        orders: orderSlice,
        products: productSlice
    }
})

export default store
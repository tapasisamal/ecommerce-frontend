import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) ||[]  // {id, title, price, qty}
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: ({
        addToCart: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id)

            if(item) {
                item += 1
            } else {
                state.items.push({...action.payload, qty: 1})
            }
            localStorage.setItem("cart", JSON.stringify(state.items)); 
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload)

            localStorage.setItem("cart", JSON.stringify(state.items)); 
        },

        increaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload)

            if(item) item.qty += 1

            localStorage.setItem("cart", JSON.stringify(state.items)); 
        },

        decreaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload)

            if(item && item.qty > 1) {
                item.qty -= 1
            }
            localStorage.setItem("cart", JSON.stringify(state.items)); 
        },
        
        clearCart: (state) => {
            state.items = []

            localStorage.setItem("cart", JSON.stringify([]));
        }
    })
})

export const {addToCart, removeFromCart, increaseQty, decreaseQty, clearCart} = cartSlice.actions
export default cartSlice.reducer
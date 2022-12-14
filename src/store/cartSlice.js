import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    carts: [],
    cartTotalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].cartQuantity += 1
            } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.carts.push(temp);
            }
        },
        remove: (state, action) => {
            // OLD METHOD-------------------------------------------
            //return state.carts.filter((item)=>item.id!==action.payload)
            const aaa = state.carts.filter((item) => item.id !== action.payload)
            state.carts = aaa
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemIndex].cartQuantity > 1) {
                state.carts[itemIndex].cartQuantity -= 1
            } else if (state.carts[itemIndex].cartQuantity === 1) {
                const aaa = state.carts.filter((item) => item.id !== action.payload.id);
                state.carts = aaa
            }

        }
    }
})
export const { add, remove,decreaseCart } = cartSlice.actions;
export default cartSlice.reducer; 
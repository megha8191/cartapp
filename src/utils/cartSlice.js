import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addtoCart: (state, action) => {
            state.push(action.payload);
        },
        removeCart: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1);
            }
        },
    }
})

export const { addtoCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer

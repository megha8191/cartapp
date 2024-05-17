import { createSlice } from "@reduxjs/toolkit";
import Cart from "../components/Cart";

export const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers:{
    addtoCart:(state,action)=>{
        state.push(action.payload);
    },
    removeCart:(state,action)=>{
        const index = state.indexOf(action.payload);
        console.log(index);
        state.splice(index,1);
    },
    }
})

export const {addtoCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer

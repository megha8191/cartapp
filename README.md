# Getting Started with Create React App
## Reduc toolkit
A predictable state container for JavaScript applications

- The state of your whole application is stored in an object tree within a single store. 
- a whole store box with multiple slices
 


Install reactreduxtoolkit
install react-redux


## shop.js
import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
// ...
const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})
export default store;


## cartSlice.js
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

## useSelector
const cartitems = useSelector((store)=>store.cart);

## Run function
 const dispatch = useDispatch()
  
 onclick: dispatch(removeCart(prod))
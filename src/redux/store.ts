import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice';
import producReducer from './features/products/productSlice';

const store = configureStore({
    reducer: {
        cart:cartReducer,
        product:producReducer
    },
});

// fix the type error 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
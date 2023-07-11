import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice';
import producReducer from './features/products/productSlice';
import { api } from './api/apiSlice';

const store = configureStore({
    reducer: {
        cart:cartReducer,
        product:producReducer,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
});

// fix the type error 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
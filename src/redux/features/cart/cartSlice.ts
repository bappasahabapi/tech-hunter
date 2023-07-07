
import { IProduct } from '@/types/globalTypes';
import {createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICart{
    products:IProduct[]
}

const initialState:ICart={
    products:[]
};


const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action:PayloadAction<IProduct>)=>{
            state.products.push(action.payload)
        },
    }

});

export const {addToCart}= cartSlice.actions
export default cartSlice.reducer
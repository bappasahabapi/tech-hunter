
import { IProduct } from '@/types/globalTypes';
import {createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICart{
    products:IProduct[];
    total:number

}

const initialState:ICart={
    products:[],
    total:0
};


const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action:PayloadAction<IProduct>)=>{
            // state.products.push(action.payload)
            //todo: push korar age check kore nibo j product ta age theke exist kore ki na

            const existing =state.products.find((product)=>product._id ===action.payload._id);
            if(existing){
                // console.log('product is  already exist');
                existing.quantity=existing.quantity! +1

            }else{
                //unique product added then quatity=1
                //  state.products.push(action.payload)
                state.products.push({...action.payload ,quantity:1})
               
            }

            //now handle the total part
           state.total +=action.payload.price;
        },
        removeOne:(state, action:PayloadAction<IProduct>)=>{
            const existing =state.products.find((product)=>product._id ===action.payload._id);
            if(existing && existing.quantity!>1){
                existing.quantity=existing.quantity! -1

            }else{
                state.products=state.products.filter(p=>p._id !==action.payload._id)
               
            }
                        //now handle the total part
           state.total -=action.payload.price
        },

        //delete cart
        removeCart:(state,action:PayloadAction<IProduct>)=>{
            state.products=state.products.filter(p=>p._id !==action.payload._id);

                  //now handle the total part
            state.total -=action.payload.price * action.payload.quantity!;
        }
       
        
    }


});

export const {addToCart,removeCart,removeOne}= cartSlice.actions
export default cartSlice.reducer
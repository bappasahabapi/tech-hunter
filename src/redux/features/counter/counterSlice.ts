import { createSlice } from "@reduxjs/toolkit";

const initialState={
    countValue:0,
    // customized:{
    //     num:5
    // }
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state)=>{state.countValue+=1},
        decrement:(state)=>{state.countValue-=1},
        // test:(state)=>{state.customized.num}
    },
});

export default counterSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    countValue: number
}

const initialState: CounterState = {
    countValue: 0,
}

// const initialState={
//     countValue:5,
//     // customized:{
//     //     num:0
//     // }
// }


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.countValue += 1 },
        decrement: (state) => { state.countValue -= 1 },
        reset: (state) => { state.countValue = 0 },
        // reset:(state)=>{state.customized.num}
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.countValue += action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;
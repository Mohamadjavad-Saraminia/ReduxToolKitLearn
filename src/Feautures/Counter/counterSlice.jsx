import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterValue: 0,
};

const counterSlice = createSlice({


    name: "Counter",

    initialState,


    reducers: {

        increment: (state) => {
            state.counterValue++;
        },

        decrement: (state) => {
            state.counterValue--;
        },
        incrementByAmount: (state, action) => {
            state.counterValue += action.payload;
            //+= yaeni meghdare Rast ro + chap kon
        }

    },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCounter = (store) => store.counter.counterValue;





import { createSlice } from "@reduxjs/toolkit";


//ba Esme incriment counter importesh kon
import { increment as incrementCounter } from "../counterSlice";

const initialState = {
    numberValue: 0,
};

const numberSlice = createSlice({


    name: "number",

    initialState,


    reducers: {

        increment: (state) => {
            state.numberValue++;
        },

        decrement: (state) => {
            state.numberValue--;
        },
    },

    //Har Vaght in Action dar counterSlice Ettefagh oftad; rooye numberSlice ham Eemal mishe
    extraReducers: (builder) => {
        builder.addCase(incrementCounter, (state) => { state.numberValue++; })
    }

});

export default numberSlice.reducer;
export const { increment, decrement, } = numberSlice.actions;






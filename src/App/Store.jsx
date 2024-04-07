import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Feautures/Counter/counterSlice";

const store = configureStore({
    reducer: { counter:counterReducer },
})
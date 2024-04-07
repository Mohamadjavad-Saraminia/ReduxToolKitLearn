import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Feautures/Counter/counterSlice";
import numberReducer from "../Feautures/Counter/Number/numberSlice";

const store = configureStore({
    //Az yek Reducer baraye 2 action estefade shod
    reducer: { counter: counterReducer, number: numberReducer },
})
export default store;
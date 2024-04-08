import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Feautures/Counter/counterSlice";
import numberReducer from "../Feautures/Counter/Number/numberSlice";
import logger from "redux-logger"; //Redux-logger for middleware

const store = configureStore({
    //Az yek Reducer baraye 2 action estefade shod
    reducer: { counter: counterReducer, number: numberReducer },
    middleware: GetDefaultMiddleware => GetDefaultMiddleware().concat(logger), //Redux-logger for middleware
})
export default store;
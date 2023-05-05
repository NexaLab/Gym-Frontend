import { configureStore } from "@reduxjs/toolkit";
import PaymentSlice from "./services/PaymentSlice";


const store = configureStore({
    reducer: {

       PaymentSlice: PaymentSlice
    }
})


export default store;
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./services/LoginSlice"




export const store = configureStore({
    reducer: {
        loginSlice: loginSlice,

    }
})



export default store;
import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "./services/ClientSlice"



const store = configureStore({
    reducer: {
        clientSlice: clientSlice,

    }
})


export default store;
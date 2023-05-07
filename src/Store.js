import { configureStore } from "@reduxjs/toolkit";
import ReviewSlice from "./Services/ReviewSlice";


const store = configureStore({
    reducer: {
       ReviewSlice: ReviewSlice

    }
})


export default store;
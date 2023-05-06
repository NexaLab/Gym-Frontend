import { configureStore } from "@reduxjs/toolkit";
import videoQRCodeSlice from "./services/VideoQRCodeSlice";

const store = configureStore({
    reducer: {

        videoQRCodeSlice: videoQRCodeSlice,

    }
})


export default store;
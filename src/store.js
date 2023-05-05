
 import { configureStore } from "@reduxjs/toolkit";
import MembershipSlice from "./services/MembershipSlice";


const store = configureStore({
    reducer: {
       MembershipSlice: MembershipSlice

    }
})


export default store;
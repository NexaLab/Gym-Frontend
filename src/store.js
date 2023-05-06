import { configureStore } from "@reduxjs/toolkit";
import videoQRCodeSlice from "./services/VideoQRCodeSlice";
import loginSlice from "./services/LoginSlice"
import clientSlice from "./services/ClientSlice"
import privateRoomSlice from "./services/PrivateRoomSlice";
import senderAndReceiverSlice from "./services/SenderAndReceiverSlice";
import messageSlice from "./services/MessageSlice";




const store = configureStore({
    reducer: {
        videoQRCodeSlice: videoQRCodeSlice,
        loginSlice: loginSlice,
        clientSlice: clientSlice,
        privateRoomSlice: privateRoomSlice,
        senderAndReceiverSlice: senderAndReceiverSlice,
        messageSlice: messageSlice


    }
})




export default store;
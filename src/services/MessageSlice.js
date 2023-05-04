import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";











const MessageSlice = createSlice({
    name: "messageSlice",
    initialState: {
        data: [],
        isLoader: false,
        isError: false,
    },


    reducers: {

        updateMessages: (state, action) => {
            state.data.push(action.payload)

        }
    }


});



export const { updateMessages } = MessageSlice.actions;

export default MessageSlice.reducer;

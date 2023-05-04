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
            state.isLoader = true;
            state.data.push(action.payload);
            state.isLoader = false;

        }
    }


});



export const { updateMessages } = MessageSlice.actions;

export default MessageSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const login = createAsyncThunk("login", async (userData) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", userData);
      return response.data.data;
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

const loginSlice = createSlice({
    name: "login",
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },


    reducers: {
        updateEmailAndPassword: (state, action) => {
            state.data.email = action.payload.email;
            state.data.password = action.payload.password;
        },
    },

    extraReducers: builder => {

        builder.addCase(login.pending, (state, action) => {
            state.isLoader = true;
        })


        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload
        })


        builder.addCase(login.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })
    }
})

export const {updateEmailAndPassword} = loginSlice.actions;
export default loginSlice.reducer;
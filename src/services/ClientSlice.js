import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getAllClients = createAsyncThunk("allClients", async () => {
  try {
    const response = await axios.get("http://localhost:3001/client/getAll");
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});





const ClientSlice = createSlice({
  name: "allClients",
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getAllClients.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(getAllClients.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(getAllClients.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});





export default ClientSlice.reducer;

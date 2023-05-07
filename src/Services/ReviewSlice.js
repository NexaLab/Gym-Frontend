import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getAllReviews = createAsyncThunk("allReviews", async () => {
  try {
    const response = await axios.get("http://localhost:3001/reviews/getAll");
    // console.log(response.data.data)
    return response.data;
    
  } catch (error) {
    console.log(error);
    throw error;
  }
});





const ReviewSlice = createSlice({
  name: "allReviews",
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getAllReviews.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.isLoader = false;
    //   console.log(action.payload)
      action.payload.data.map(data => {

        const dateFromBE = new Date(data.date)
        const dateBE = `${dateFromBE.getDate()}-${dateFromBE.getMonth() + 1}-${dateFromBE.getFullYear()}`

        state.data.push({
        id: data.id,
        rating: data.rating,
        comment: data.comment ,
        firstName: data.first_name,
        lastName: data.last_name,
        date: dateBE,
        numberOfReviews: action.payload.numberOfReviews,
        averageRating: action.payload.averageRating,
      })
    })
  });

    builder.addCase(getAllReviews.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});





export default ReviewSlice.reducer;
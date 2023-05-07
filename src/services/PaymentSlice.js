import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getAllPayment = createAsyncThunk("allPayment", async () => {
  try {
    const response = await axios.get("http://localhost:3001/membership/getAll");
    return response.data.data;

  } catch (error) {
    console.log(error);
    throw error;
  }
});





const PaymentSlice = createSlice({
  name: "allPayment",
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getAllPayment.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(getAllPayment.fulfilled, (state, action) => {
      state.data = []
      state.isLoader = false;
      action.payload.map(data => {

        const startDateFromBE = new Date(data.start_date)
        const startDate = `${startDateFromBE.getDate()}-${startDateFromBE.getMonth() + 1}-${startDateFromBE.getFullYear()}`
        const endDateFromBE = new Date(data.end_date)
        const endDate = `${endDateFromBE.getDate()}-${endDateFromBE.getMonth() + 1}-${endDateFromBE.getFullYear()}`

        state.data.push({
          key: data.id,
          clientId: data.client_id,
          membershipId: data.membership_id,
          firstName: data.first_name,
          lastName: data.last_name,
          phoneNo: data.phone_no,
          location: data.location,
          userId: data.user_id,
          email: data.email,
          status: data.status,
          price: data.price,
          startDate: startDate,
          endDate: endDate
        })
      })
    });

    builder.addCase(getAllPayment.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});





export default PaymentSlice.reducer;
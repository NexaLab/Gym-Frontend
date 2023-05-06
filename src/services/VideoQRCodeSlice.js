import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "jquery";





export const getAllVideosLinksForQR = createAsyncThunk("allVideosLinksForQR", async () => {
    try {
        const response = await axios.get("http://localhost:3001/videos/allLinks");
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});








export const deleteVideoOfQRCodeFromDatabase = createAsyncThunk("deleteVideosOfQRCodeFromDatabase", async (data) => {
    try {
        const response = await axios.delete(`http://localhost:3001/videos/delete/${data.videoLinkID}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});









export const addNewVideoOfQRCodeInDatabase = createAsyncThunk("addNewVideoOfQRCodeInDatabase", async (data) => {
    try {
        const response = await axios.post(`http://localhost:3001/videos/save`, data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});









export const updateVideoOfQRCodeInDatabase = createAsyncThunk("updateVideoOfQRCodeInDatabase", async (data) => {
    try {
        const response = await axios.put(`http://localhost:3001/videos/update/${data.videoLinkID}`, data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});








const VideoQRCodeSlice = createSlice({
    name: "VideosLinksForQR",
    initialState: {
        data: [],
        isLoader: false,
        isError: false,
    },


    reducers: {

        deleteVideoOfQRCode: (state, action) => {
            state.data.pop(video => video.key == action.payload.videoKey);
        },



        addNewVideoOfQRCode: (state, action) => {
            state.data.push(action.payload);
        },



        updateVideoOfQRCode: (state, action) => {
            state.data = state.data.map(videoOfQRCodeData => {
                if (videoOfQRCodeData.key === action.payload.key) {
                    videoOfQRCodeData.name = action.payload.name;
                    videoOfQRCodeData.link = action.payload.link;
                }
                return videoOfQRCodeData;
            });
        }


    },

    extraReducers: (builder) => {




        builder.addCase(getAllVideosLinksForQR.pending, (state, action) => {
            state.isLoader = true;
        });

        builder.addCase(getAllVideosLinksForQR.fulfilled, (state, action) => {
            state.isLoader = false;
            action.payload.map(data => state.data.push({
                key: data.id,
                name: data.name,
                link: data.link
            }))
        });

        builder.addCase(getAllVideosLinksForQR.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });






        builder.addCase(deleteVideoOfQRCodeFromDatabase.pending, (state, action) => {
            state.isLoader = true;
        });

        builder.addCase(deleteVideoOfQRCodeFromDatabase.fulfilled, (state, action) => {
            state.isLoader = false;
        });

        builder.addCase(deleteVideoOfQRCodeFromDatabase.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });






        builder.addCase(addNewVideoOfQRCodeInDatabase.pending, (state, action) => {
            state.isLoader = true;
        });

        builder.addCase(addNewVideoOfQRCodeInDatabase.fulfilled, (state, action) => {
            state.isLoader = false;
        });

        builder.addCase(addNewVideoOfQRCodeInDatabase.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });




        builder.addCase(updateVideoOfQRCodeInDatabase.pending, (state, action) => {
            state.isLoader = true;
        });

        builder.addCase(updateVideoOfQRCodeInDatabase.fulfilled, (state, action) => {
            state.isLoader = false;
        });

        builder.addCase(updateVideoOfQRCodeInDatabase.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        });
    },
});



export const { deleteVideoOfQRCode, addNewVideoOfQRCode, updateVideoOfQRCode } = VideoQRCodeSlice.actions;

export default VideoQRCodeSlice.reducer;
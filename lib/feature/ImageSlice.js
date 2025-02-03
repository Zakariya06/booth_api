import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url : ""
}

export const ImageSlice = createSlice({
    name: "Generated Image",
    initialState, 
    reducers: {
        addImage : (state, action) => {
            state.url = action.payload
        }
    }
})


export const {addImage} = ImageSlice.actions;

export default ImageSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptclicked:false,
    },
    reducers:{
        setGPTClicked:(state)=>{
            state.gptclicked=!state.gptclicked;
        }
    }
})

export const{setGPTClicked}=gptSlice.actions;
export default gptSlice.reducer;
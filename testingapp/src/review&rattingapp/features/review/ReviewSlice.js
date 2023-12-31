import React from 'react';
import axios from 'axios';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

let initialState = {
  review_msg: "",
  loading : "",
  error : "",
};

export const companyReview = createAsyncThunk(
  "company/addCompanyReview",
  async (body, thunkAPI)=> {
    const res = await axios.post(
      "http://localhost:9000/company/company_review",
      body,
      {
        headers: {
          "Accept" :"applications/json",
          "content-type": "application/json",
        }
      }
    );
    return res.data;
  }
);

const reviewSlice =createSlice({
  name: "review",
  initialState,
  reducers: {
    clearState: (state) => {
      state.review_msg="";
      state.loading ="true";
      state.error= "";
    }
  },
  extraReducers:{
    [companyReview.pending]:(state)=>{
      state.loading= "true";
    },
    [companyReview.fulfilled]: (state,{payload})=>{
      state.loading="false";
      if (payload.success){
        state.review_msg = payload.message;
      }else{
        state.error = payload.message;
      }
    },
    [companyReview.rejected] :(state,{payload})=>{
      state.loading ="false";

      state.error=payload.message;
    }


  }
})


export default reviewSlice.reducer;
export const{clearState} = reviewSlice.actions;

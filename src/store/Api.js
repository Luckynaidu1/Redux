import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isSuccess: (state, action) => {
      state.isLoading = false;
      state.data = [...action.getData];
    },
    isFailure: (state) => {
      state.isLoading = false;
      state.errors = true;
    },
    AddUser: (state, action) => {
      state.data = [...state.data, action.getData];
    },
  },
});

export const { isLoading, isSuccess, isFailure, AddUser } = dataSlice.actions;

export const getData = () => (dispatch) => {
  dispatch(isLoading());
  axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      dispatch(isSuccess(res));
    })
    .catch((res) => {
      dispatch(isFailure());
    });
};

export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { login } from "./callsAPI";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      userInfo: null,
      pending: null,
      error: false,
      userList: [],
   },
   reducers: {
      getAllUser: (state, action) => {
         state.userList = action.payload;
      },
      logOut: (state) => {
         state.userInfo = null;
         state.userList = [];
      },
      loadUser: (state, action) => {
         state.userInfo = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(login.pending, (state) => {
         state.pending = true;
         state.error = false;
      });
      builder.addCase(login.fulfilled, (state, action) => {
         state.pending = false;
         state.userInfo = action.payload;
      });
      builder.addCase(login.rejected, (state) => {
         state.pending = false;
         state.error = true;
      });
   },
});

export const { getAllUser, logOut, loadUser } = userSlice.actions;
export default userSlice.reducer;

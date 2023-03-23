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

export const { getAllUser, logOut } = userSlice.actions;
export default userSlice.reducer;

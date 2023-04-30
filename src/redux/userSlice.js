import { createSlice } from "@reduxjs/toolkit";
import { login, autoLogin } from "./callsAPI";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      userInfo: null,
      pending: null,
      error: false,
      userList: [],
      msg: "",
   },
   reducers: {
      getAllUser: (state, action) => {
         state.userList = action.payload;
      },
      logOut: (state) => {
         state.userInfo = null;
         state.userList = [];
      },
      msg: (state, action) => {
         state.msg = action.payload;
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
      builder.addCase(login.rejected, (state, action) => {
         state.pending = false;
         state.error = true;
         state.msg = action.payload;
      });
      builder.addCase(autoLogin.pending, (state) => {
         state.pending = true;
         state.error = false;
      });
      builder.addCase(autoLogin.fulfilled, (state, action) => {
         state.pending = false;
         state.userInfo = action.payload;
      });
      builder.addCase(autoLogin.rejected, (state, action) => {
         state.pending = false;
         state.error = true;
         state.msg = action.payload;
      });
   },
});

export const { getAllUser, logOut, loadUser, msg } = userSlice.actions;
export default userSlice.reducer;

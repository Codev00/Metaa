import {
   createAsyncThunk,
   isRejected,
   isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
const login = createAsyncThunk(
   "auth/login",
   async (user, { rejectWithValue }) => {
      try {
         const res = await axios.post("/api/auth/login", user);
         return res.data;
      } catch (error) {
         const err = error.response.data;
         console.log(err);
         return rejectWithValue(err);
      }
   }
);

const autoLogin = createAsyncThunk(
   "auth/autologin",
   async (token, { rejectWithValue }) => {
      try {
         const res = await axios.get("/api/auth/autoLogin", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         return res.data;
      } catch (error) {
         const err = error.response.data;
         console.log(err);
         return rejectWithValue(err);
      }
   }
);

export { login, autoLogin };

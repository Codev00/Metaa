import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("auth/login", async (user) => {
   const res = await axios.post("/api/auth/login", user);
   return res.data;
});
export { login };

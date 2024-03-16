import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
};
export const Usergetter = createAsyncThunk("/get-user", async () => {
  const response = await axios.get("/api/v2/user/getuser");
  return response.data.usercheck;
});
export const LogoutUser = createAsyncThunk("user/logout", async () => {
  await axios.post("/api/v2/user/logout");
});

const UserSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Usergetter.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(Usergetter.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(Usergetter.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(LogoutUser.fulfilled, (state, action) => {
        state.user = null;
        state.loading = false;
      });
  },
});
export const { clearErrors } = UserSlice.actions;
export default UserSlice.reducer;

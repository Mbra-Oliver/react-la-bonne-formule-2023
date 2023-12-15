import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAUthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAUthenticated = true;
    },
    logout(state) {
      state.isAUthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

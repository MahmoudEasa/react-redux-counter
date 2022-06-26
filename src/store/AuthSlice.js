import { createSlice } from "@reduxjs/toolkit";

const initialState = { login: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggle: (state) => {
      state.login = !state.login;
    },
  },
});

export const { toggle } = AuthSlice.actions;
export default AuthSlice.reducer;

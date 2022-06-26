import { createSlice } from "@reduxjs/toolkit";
import { toggle } from "./AuthSlice";

const initState = { value: 0 };

const CounterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggle, (state, action) => {
      state.value = 0;
    });
  },
});

export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;

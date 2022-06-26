import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import AuthSlice from "./AuthSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: AuthSlice },
});

export default store;
//
//
//
//
//
//
//
//
//
//
//
//

//

// import { createSlice, createStore } from "@reduxjs/toolkit";

// const initState = { value: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initState,
//   reducers: {
//     increase: (state, action) => {
//       state.value += action.payload;
//     },
//     decrease: (state, action) => {
//       state.value -= action.payload;
//     },
//     toggle: (state, action) => {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const store = createStore(counterSlice.reducer);

// export const { increase, decrease, toggle } = counterSlice.actions;

// export default store;
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { createStore } from "redux";

// const initState = { value: 0, showCounter: true };
// const increase = "increase";
// const decrease = "decrease";
// const toogle = "toogle";

// const counterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case increase:
//       return { ...state, value: state.value + action.payload };
//     case decrease:
//       return { ...state, value: state.value - action.payload };
//     case toogle:
//       return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

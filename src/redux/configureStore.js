import { configureStore } from "@reduxjs/toolkit";
import pollutionReducer from "./Slice/slice";

const store = configureStore({
  reducer: {
    pollution: pollutionReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
const rootReducers = {
  counter: counterReducer,
};

const store = configureStore({
  reducer: rootReducers,
});
export default store;

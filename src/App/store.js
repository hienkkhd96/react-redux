import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/Auth/userSlice";
const rootReducers = {
  counter: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducers,
});
export default store;

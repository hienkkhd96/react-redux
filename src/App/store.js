import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/Auth/userSlice";
import categoryReducer from "../features/Product/components/category/categorySlice";
const rootReducers = {
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
};

const store = configureStore({
  reducer: rootReducers,
});
export default store;

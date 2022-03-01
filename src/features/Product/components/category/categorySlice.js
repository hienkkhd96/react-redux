const { createSlice } = require("@reduxjs/toolkit");

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategoryList(state) {
      return [...state];
    },
  },
});
const { actions, reducer } = categorySlice;
export const { setCategoryList } = actions;
export default reducer;

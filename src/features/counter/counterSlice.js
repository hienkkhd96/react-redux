const { createSlice } = require("@reduxjs/toolkit");

const conterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
});
const { actions, reducer } = conterSlice;
export const { increment, decrement } = actions;
export default reducer;

import userApi from "../../API/userApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const registerThunk = createAsyncThunk(
  "user/registerThunk",
  async (payload) => {
    const data = await userApi.register(payload);
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  }
);
export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (payload) => {
    const data = await userApi.login(payload);
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    curent: JSON.parse(localStorage.getItem("user")) || {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    [registerThunk.fulfilled]: (state, action) => {
      state.curent = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.curent = action.payload;
    },
  },
});
const { reducer } = userSlice;

export default reducer;

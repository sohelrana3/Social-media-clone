import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    LogginUser: (state, action) => {
      state.userinfo = action.payload;
    },
    LoggOutUser: (state) => {
      state.userinfo = null;
    },
  },
});

export const { LogginUser, LoggOutUser } = userSlice.actions;
export default userSlice.reducer;

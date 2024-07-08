import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { authApi } from "../api/authApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: authSlice,
  },
  middleware : (getDefaultmiddleware)=> getDefaultmiddleware().concat(authApi.middleware)

});

export default store;

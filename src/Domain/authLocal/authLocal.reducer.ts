import { createSlice } from "@reduxjs/toolkit";

import { IAuthLocal } from "./authLocal.types";

const initialState: IAuthLocal = {
  data: null,
};

export const authLocal = createSlice({
  name: "authLocal",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.data = payload;
    },
    logout: (state) => {
      state.data = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authLocal.actions;

export default authLocal.reducer;

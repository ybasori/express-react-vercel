import { createSlice } from "@reduxjs/toolkit";

import { IAuthLocal } from "../authLocal/authLocal.types";

const initialState: IAuthLocal = {
  data: null,
};

export const authSession = createSlice({
  name: "authsession",
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
export const { login, logout } = authSession.actions;

export default authSession.reducer;

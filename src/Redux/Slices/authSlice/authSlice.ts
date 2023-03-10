import { RootState } from "./../../store/store";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "./../../../types/interfaces";

interface AuthState {
  token: string;
  user: User;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  user: {
    id: 0,
    email: "",
    password: "",
    name: "",
    role: "",
    avatar: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, { payload }) {
      localStorage.setItem("token", payload);
      state.token = payload;
    },
    setLogout(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
    setUserInfo(state, { payload }) {
      state.user = payload;
    },
  },
});

export const getTokenFromState = (state: RootState) => state.auth.token;

export const getAuthUserFromState = (state: RootState) => state.auth.user;

export const { setLogout, setLogin, setUserInfo } = authSlice.actions;

export default authSlice.reducer;

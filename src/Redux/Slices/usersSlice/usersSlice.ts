import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewUser } from "../../../API/UsersService";
import { User } from "../../../types/interfaces";

interface UserState {
  users: User[];
  loading: Boolean;
  error: string | any;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const createNewAsyncUser = createAsyncThunk(
  "users/createNewAsyncUser",
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await addNewUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNewAsyncUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createNewAsyncUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = [...state.users, ...payload];
    });
    builder.addCase(createNewAsyncUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;

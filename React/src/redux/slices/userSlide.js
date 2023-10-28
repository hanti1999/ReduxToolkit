import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    const response = await axios('http://localhost:8080/users/all');
    return response.data;
  }
);

const initialState = {
  listUsers: [],
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.listUsers = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;

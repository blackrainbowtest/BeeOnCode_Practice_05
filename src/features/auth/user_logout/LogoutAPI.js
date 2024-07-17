import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Logout user
 */
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      // Perform any necessary cleanup here
      return true;
    // eslint-disable-next-line no-unreachable
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
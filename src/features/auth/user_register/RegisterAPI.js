import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../../base/base_url';

/**
 * Register user
 */
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
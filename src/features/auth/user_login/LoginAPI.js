// src/auth/user_login/LoginAPI.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../../app/base/base_url';

/**
 * Login user
 */
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/users`, {
        params: credentials,
      });
      if (response.data.length) {
        return response.data[0];
      } else {
        return rejectWithValue('Invalid credentials');
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
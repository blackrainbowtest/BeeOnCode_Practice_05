// src/auth/user_login/LoginAPI.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from 'app/base/base_url';
import { addError, setLoading } from 'features/global/GlobalSlice';

/**
 * Login user
 */
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));

      const response = await axios.get(`${apiUrl}/users`, {
        params: {
          email: userData.email,
          password: userData.password,
        },
      });
      if (response.data.length) {
        // get first user
        const user = response.data[0];

        // patch user and add token
        const updatedUserResponse = await axios.patch(`${apiUrl}/users/${user.id}`, {
          token: userData.token,
        });

        return updatedUserResponse.data;
      } else {
        throw new Error('Invalid email or password.');
      }
    } catch (err) {
      dispatch(addError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
/**
 * Verify token
 */
export const verifyToken = createAsyncThunk(
  'user/verifyToken',
  async (token, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`${apiUrl}/users`, {
        params: { token }
      });
      if (response.data.length > 0) {
        return response.data;
      } else {
        throw new Error('Invalid token.');
      }
    } catch (err) {
      dispatch(addError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
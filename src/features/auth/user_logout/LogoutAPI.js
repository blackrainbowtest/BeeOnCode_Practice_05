import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification } from 'features/global/GlobalSlice';

/**
 * Logout user
 */
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // Perform any necessary cleanup here
      // FIXME: used json-server and logout just cleanup authToken
      dispatch(addNotification("Logout success."))
      return true;
    // eslint-disable-next-line no-unreachable
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
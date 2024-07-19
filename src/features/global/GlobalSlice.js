import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: [],
  notifications: [],
  loading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addError: (state, action) => {
      state.errors.push(action.payload);
    },
    removeError: (state, action) => {
      state.errors = state.errors.filter((_, index) => index !== action.payload);
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter((_, index) => index !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addError, removeError, addNotification, removeNotification, setLoading } = globalSlice.actions;
export default globalSlice.reducer;
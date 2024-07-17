import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../../features/Category/CategorySlice';
import userReducer from '../../features/auth/userSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        user: userReducer,
    },
});
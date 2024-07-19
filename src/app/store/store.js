import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../../features/Category/CategorySlice';
import subCategoryReducer from '../../features/SubCategory/SubCategorySlice'
import globalReducer from '../../features/global/GlobalSlice'
import userReducer from '../../features/auth/userSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        subCategory: subCategoryReducer,
        user: userReducer,
        global: globalReducer,
    },
});
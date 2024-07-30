import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from 'app/base/base_url';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';

const url = `${apiUrl}/products`;

export const getProducts = createAsyncThunk(
    'products/getproducts',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

// FIXME: add post and patch API later
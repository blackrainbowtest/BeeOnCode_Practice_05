import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from 'app/base/base_url';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';
import { convertImageToBase64 } from 'utils/image';

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
export const addProduct = createAsyncThunk(
    'products/addproducts',
    async ({ productData, userId, currentTime }, { dispatch, rejectWithValue }) => {
        try {
            const base64Image = productData.images.length ? await convertImageToBase64(productData.images) : null;
            const response = await axios.post(url, { ...productData, images: base64Image, user_id: userId, currentTime });
            dispatch(addNotification("Product add successful"))
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false)); // maybe i dont need this one IDK
        }
    }
);
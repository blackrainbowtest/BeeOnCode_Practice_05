import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from './ProductAPI';

const initialState = {
    data: [],
    currentSubcategory: -1,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    // FIXME: add reducers
    reducers: {

    },
    // FIXME: Add extra reducers
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export default productSlice.reducer;

export const {} = productSlice.actions
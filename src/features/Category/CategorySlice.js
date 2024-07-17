import { createSlice } from "@reduxjs/toolkit"
import { getCategorys } from "./CategoryAPI"

const initialState = {
    data: [],
    errorMessage: "",
    gender: true,
    category: 1,
    value: "1",
    loading: false
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export default categorySlice.reducer

export const {} = categorySlice.actions

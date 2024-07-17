import { createSlice } from "@reduxjs/toolkit"
// import { getCategorys } from "./CategoryAPI"

const initialState = {
    data: [],
    gender: true,
    category: 1,
    value: "1",
    loading: false,
    errorMessage: "",
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        changeGender: (state, action) => {
            state.gender = action.payload
        },
    },
    // extraReducers: (builder) => { }
})

export default categorySlice.reducer

export const { changeGender } = categorySlice.actions

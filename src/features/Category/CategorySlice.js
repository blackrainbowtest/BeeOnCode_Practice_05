import { createSlice } from "@reduxjs/toolkit"
// import { getCategorys } from "./CategoryAPI"

const initialState = {
    data: [
        { id: 1, name: "cat1", gender: true },
        { id: 2, name: "cat2", gender: true },
        { id: 3, name: "cat345678912354565", gender: true },
        { id: 4, gender: true },
        { id: 5, name: "cat1", gender: false },
        { id: 6, name: "cat2", gender: false },
        { id: 7, name: "cat345678912354565", gender: false },
    ],
    gender: true,
    category: {
        male: -1,
        female: -1
    },
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
        changeCategory: (state, action) => {
            state.category = action.payload
        },
    },
    // extraReducers: (builder) => { }
})

export default categorySlice.reducer

export const { changeGender, changeCategory } = categorySlice.actions

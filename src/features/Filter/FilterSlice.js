import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isFilter: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.isFilter = action.payload
        },
        setFiltredData: (state, action) => {
            state.data = action.payload
        },
        resetFilter: (state, _) => {
            state.isFilter = false
            state.data = []
        }
    }
})

export const { changeFilter, setFiltredData, resetFilter } = filterSlice.actions
export default filterSlice.reducer;
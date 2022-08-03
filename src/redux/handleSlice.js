import { createSlice } from "@reduxjs/toolkit"

const handleSlice = createSlice({
    name: 'products',
    initialState: {
        productList: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.productList.push(action.payload)
        }
    }
})

export default handleSlice.reducer
export const {addProducts} = handleSlice.actions
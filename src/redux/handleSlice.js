import { createSlice } from "@reduxjs/toolkit"

const handleSlice = createSlice({
    name: 'product',
    initialState: {
        viewProductList: [],
        addProductList: [],
    },
    reducers: {
        viewProducts: (state, action) => {
            state.viewProductList.push({...action.payload, quantity: 1})
        },

        addProducts: (state, action) => {
            const index = state.addProductList.findIndex(x => x.id === action.payload.id)
            if(index >= 0) {
                state.addProductList[index].quantity ++
                state.addProductList[index].totalPrice += parseFloat(action.payload.price)
            } else {
                state.addProductList.push({...action.payload, quantity: 1, totalPrice: parseFloat(action.payload.price)})
            }      
        },

        addDetailProducts: (state, action) => {
            const index = state.addProductList.findIndex(x => x.id === action.payload.id)
            if(index <= 0) {
                state.addProductList.push({...action.payload, quantity: 1, totalPrice: parseFloat(action.payload.price)})
            } else {
                state.addProductList[index].totalPrice += parseFloat(action.payload.price)
            }
        },

        deleteProduct: (state, action) => {
            const index = state.addProductList.findIndex(x => x.id === action.payload.id)
            state.addProductList.splice(index, 1)
        },

        decreaseQuantity: (state, action) => {
            const index = state.addProductList.findIndex(x => x.id === action.payload.id)
            if(state.addProductList[index].quantity > 1) {
                state.addProductList[index].quantity --
                state.addProductList[index].totalPrice -= parseFloat(action.payload.price)
            } else {
                alert("Bạn phải đặt số lượng tối thiểu là 1 sản phẩm !")
            }
        }

    }
})

export default handleSlice.reducer
export const {viewProducts, addProducts, decreaseQuantity, deleteProduct, addDetailProducts} = handleSlice.actions
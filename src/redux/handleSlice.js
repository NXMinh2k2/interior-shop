import { createSlice } from "@reduxjs/toolkit"

const handleSlice = createSlice({
    name: 'product',
    initialState: {
        viewProductList: [],
        addProductList: [],
        checkoutProductList: [],
    },
    reducers: {
        viewProducts: (state, action) => {
            state.viewProductList.push({...action.payload, quantity: 1})
        },

        orderProduct: (state, action) => {
            if(state.addProductList.length > 1) {
                state.checkoutProductList.push(...state.addProductList.slice(state.addProductList.length -1))
            } else {
                state.checkoutProductList.push(...state.addProductList)
            }  
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
            if(index >= 0) {
                
            } else {
                state.addProductList.push({...action.payload, quantity: 1, totalPrice: parseFloat(action.payload.price)})
            }
        },

        deleteProduct: (state, action) => {
            const index = state.checkoutProductList.findIndex(x => x.id === action.payload.id)
            state.checkoutProductList.splice(index, 1)
        },

        decreaseQuantity: (state, action) => {
            const index = state.addProductList.findIndex(x => x.id === action.payload.id)
            if(state.addProductList[index].quantity > 1) {
                state.addProductList[index].quantity --
                state.addProductList[index].totalPrice -= parseFloat(action.payload.price)
            } else {
                alert("B???n ph???i ?????t s??? l?????ng t???i thi???u l?? 1 s???n ph???m !")
            }
        },

        decreaseQuantityCart: (state, action) => {
            const index = state.checkoutProductList.findIndex(x => x.id === action.payload.id)
            if(state.checkoutProductList[index].quantity > 1) {
                state.checkoutProductList[index].quantity --
                state.checkoutProductList[index].totalPrice -= parseFloat(action.payload.price)
            } else {
                alert("B???n ph???i ?????t s??? l?????ng t???i thi???u l?? 1 s???n ph???m !")
            }
        },

        increaseQuantityCart: (state, action) => {
            const index = state.checkoutProductList.findIndex(x => x.id === action.payload.id)
            if(index >= 0) {
                state.checkoutProductList[index].quantity ++
                state.checkoutProductList[index].totalPrice += parseFloat(action.payload.price)
            } else {
                state.checkoutProductList.push({...action.payload, quantity: 1, totalPrice: parseFloat(action.payload.price)})
            }      
        },
    }
})

export default handleSlice.reducer
export const {viewProducts, addProducts, decreaseQuantity, deleteProduct, addDetailProducts, orderProduct, decreaseQuantityCart, increaseQuantityCart} 
= handleSlice.actions
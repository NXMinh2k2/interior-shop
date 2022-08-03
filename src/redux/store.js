import {configureStore} from '@reduxjs/toolkit'
import handleSlice from './handleSlice'

const store = configureStore({
    reducer: {
        products: handleSlice
    }
})

export default store
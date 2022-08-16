import {configureStore} from '@reduxjs/toolkit'
import handleSlice from './handleSlice'

const store = configureStore({
    reducer: {
        product: handleSlice
    }
})

export default store
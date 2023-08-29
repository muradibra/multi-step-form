import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../features/formSlice/formSlice'

export const store = configureStore({
    reducer: { formReducer }
})
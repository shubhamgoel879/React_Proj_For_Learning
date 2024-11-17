import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../components/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
import { configureStore, } from "@reduxjs/toolkit";
import  orderSlice  from "./orderSlice";
import  filterSlice  from "./filterSlice";

export const store = configureStore({
    reducer: {
        orders: orderSlice,
        filters: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
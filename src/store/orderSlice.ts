import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Order } from "../types/order";

interface OrderSlice {
    orders: Order[],
}

const initialState: OrderSlice = {
    orders: []
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        saveOrders(state, action: PayloadAction<Order[]>) {
            state.orders = action.payload
        },
        clearList(state){
            state.orders = []
        },
        addOrder(state, action: PayloadAction<Order>){
            state.orders.push(action.payload)
        },
        updateOrder(state, action: PayloadAction<Order>){
            state.orders = state.orders.map(item => 
                item.id === action.payload.id ? action.payload : item
            ) 
        }
    }
})

export const {saveOrders, clearList, addOrder, updateOrder} = orderSlice.actions
export default orderSlice.reducer
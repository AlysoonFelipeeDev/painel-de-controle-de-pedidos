import type { Order } from "../types/order"
import { api } from "./api"

export const orderService = {
    async getOrders(): Promise<Order[]>{
        const response = await api.get<Order[]>('/orders')
        return response.data
    },

    async getOrderById(id: string): Promise<Order> {
        const response = await api.get<Order>(`/orders/${id}`)
        return response.data
    }
}
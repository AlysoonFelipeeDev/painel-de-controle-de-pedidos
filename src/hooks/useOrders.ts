import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export function useOrder(){
    const query = useQuery({
        queryKey: ['orders'],
        queryFn: orderService.getOrders
    })

    return {
        orders: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
    }
}
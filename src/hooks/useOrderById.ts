import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export function useOrderById(id: string){
    return useQuery({
        queryKey: ['orders', id],
        queryFn: () => orderService.getOrderById(id), 
        enabled: !!id
    })
}
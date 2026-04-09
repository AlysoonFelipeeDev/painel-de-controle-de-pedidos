import { DashboardFilters } from "../components/dashboard/DashboardFilters";
import { DashboardMetrics } from "../components/dashboard/DashboardMetrics";
import { OrdersTable } from "../components/order-details/OrdersTable";
import { Loading } from "../components/styles/Loading";
import { PageHeader, PageShell, PageSubtitle, PageTitle } from "../components/styles/PageShell";
import { useOrder } from "../hooks/useOrders";
import { useAppSelector } from "../store/reduxHooks";

export function Dashboard() {
    const {orders, isLoading, isError} = useOrder()
    const filters = useAppSelector(state => state.filters)

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const days = filters.period === '7d' ? 7 : filters.period === '30d' ? 30 : 90
    const dateLimit = new Date()
    dateLimit.setHours(0, 0, 0, 0)
    dateLimit.setDate(today.getDate() - days)

    const ordersFiltered = orders.filter(order => {
        if(filters.status !== 'todos' && order.status !== filters.status) {
            return false
        }
        if(filters.searchOrder && 
            !order.trackingCode.includes(filters.searchOrder) && 
            !order.customer.toLowerCase().includes(filters.searchOrder.toLowerCase())) {
                return false
            }
        
            if (filters.period !== 'all') {  
                const orderDate = new Date(order.createdAt)
                orderDate.setHours(0, 0, 0, 0)
                
                if (orderDate < dateLimit) {
                    return false
                }
            }
        return true
    })

    if(isError) return <div>Erro ao buscar dados</div>
    

    return (
        <PageShell>
            <PageHeader>
                <PageTitle>Painel de Pedidos</PageTitle>
                <PageSubtitle>Visão geral de logistica e indicadores operacionais</PageSubtitle>
            </PageHeader>
            {isLoading ? 
                <Loading /> 
            :
                <>
                <DashboardMetrics orders={orders}/>
                <DashboardFilters/>
                <OrdersTable orders={ordersFiltered}/>    
                </>
            }
        </PageShell>
    )
}
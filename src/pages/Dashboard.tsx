import { PageHeader, PageShell, PageSubtitle, PageTitle } from "../components/styles/PageShell";
import { useOrder } from "../hooks/useOrders";
import { format } from 'date-fns'

export function Dashboard() {
    const {orders, isLoading, isError} = useOrder()
    if(isLoading) return <div>Carregando...</div>
    if(isError) return <div>Erro ao buscar dados</div>



    return (
        <PageShell>
            <PageHeader>
                <PageTitle>Painel de Pedidos</PageTitle>
                <PageSubtitle>Visão geral de logistica e indicadores operacionais</PageSubtitle>
            </PageHeader>
                <ul>
                    {orders.map(order => {
                        const lastUpdate = order.statusHistory.at(-1)
                        return (
                            <li key={order.id}>
                                <p>Pedido: {order.trackingCode}</p>
                                <p>Cliente: {order.customer}</p>
                                <p>Status: {lastUpdate.status}</p>
                                <p>Atualizado em: {format( new Date(lastUpdate.timestamp), "dd/MM/yyyy 'às' HH:mm")}</p>
                                <p>Total: R$ {order.value}</p>
                            </li>
                        )
                    })}
                </ul>
        </PageShell>
    )
}